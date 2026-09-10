import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const DEFAULT_CHAT_ID = '5605837016';

/**
 * Server-side Telegram Notification Service for MixProduct
 * 
 * Securely delivers customer requests from the website form to the Telegram bot
 * @MixProduct_UzBot in chat ID 5605837016.
 * 
 * SECURITY:
 * TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are strictly loaded from server environment
 * variables and NEVER exposed to the frontend/client code.
 */

export async function sendTelegramNotification({ name, phone, message }) {
  // Reload environment variables so updates to local .env are picked up immediately
  dotenv.config({ path: path.resolve(__dirname, '../.env'), override: true });

  // 1. Validation
  const trimmedName = String(name || '').trim();
  const trimmedPhone = String(phone || '').trim();
  const trimmedMessage = String(message || '').trim();

  if (!trimmedName || trimmedName.length < 2) {
    return {
      status: 400,
      success: false,
      error: 'VALIDATION_ERROR',
      message: 'Пожалуйста, укажите ваше имя (минимум 2 символа).'
    };
  }

  // Validate phone: must contain at least 7 digits
  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  if (digitsOnly.length < 7) {
    return {
      status: 400,
      success: false,
      error: 'VALIDATION_ERROR',
      message: 'Пожалуйста, укажите корректный номер телефона.'
    };
  }

  // 2. Check server environment credentials
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const envChatId = process.env.TELEGRAM_CHAT_ID;
  const chatId = (envChatId && envChatId.trim() !== '' && envChatId !== 'YOUR_CHAT_ID_HERE')
    ? envChatId.trim()
    : DEFAULT_CHAT_ID;

  const isConfigured = Boolean(
    botToken && 
    botToken.trim() !== '' && 
    botToken !== 'YOUR_BOT_TOKEN_HERE' &&
    chatId
  );

  if (!isConfigured) {
    // REALISTIC BEHAVIOR: DO NOT FAKE INTEGRATION
    console.warn('[MixProduct Backend] Telegram credentials missing in .env file (TELEGRAM_BOT_TOKEN).');
    return {
      status: 503,
      success: false,
      error: 'CONFIG_MISSING',
      message: 'Интеграция с Telegram ожидает настройки: в файле .env на сервере не задан TELEGRAM_BOT_TOKEN для бота @MixProduct_UzBot.',
      details: {
        bot: '@MixProduct_UzBot',
        chatId: chatId,
        requiredEnv: ['TELEGRAM_BOT_TOKEN']
      }
    };
  }

  // 3. Construct Telegram formatted text
  // Tashkent is UTC+5
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(now);

  const messageContent = trimmedMessage || 'Не указан';

  const telegramHtml = [
    '🛍 <b>НОВАЯ ЗАЯВКА — MIXPRODUCT</b>',
    '',
    `<b>Имя:</b> ${escapeHtml(trimmedName)}`,
    `<b>Телефон:</b> ${escapeHtml(trimmedPhone)}`,
    `<b>Запрос:</b> ${escapeHtml(messageContent)}`,
    `<b>Дата:</b> ${escapeHtml(formattedDate)}`,
    '<b>Источник:</b> Сайт MixProduct'
  ].join('\n');

  const telegramPlain = [
    '🛍 НОВАЯ ЗАЯВКА — MIXPRODUCT',
    '',
    `Имя: ${trimmedName}`,
    `Телефон: ${trimmedPhone}`,
    `Запрос: ${messageContent}`,
    `Дата: ${formattedDate}`,
    'Источник: Сайт MixProduct'
  ].join('\n');

  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    let response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramHtml,
        parse_mode: 'HTML'
      })
    });

    let data = await response.json();

    // If HTML parsing fails for any reason, fallback to plain text format
    if (!data.ok && data.description && data.description.toLowerCase().includes('parse')) {
      response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramPlain
        })
      });
      data = await response.json();
    }

    if (!data.ok) {
      console.error('[MixProduct Backend] Telegram API error:', data);
      let humanMessage = `Ошибка Telegram API: ${data.description || 'Не удалось отправить сообщение в Telegram'}`;

      if (data.description && data.description.toLowerCase().includes('blocked by the user')) {
        humanMessage = `Бот заблокирован пользователем или ещё не активирован. Владелец магазина (Chat ID: ${chatId}) должен открыть бота в Telegram и нажать «Старт» (/start).`;
      } else if (data.description && data.description.toLowerCase().includes('chat not found')) {
        humanMessage = `Чат с ID ${chatId} не найден. Владелец магазина должен сначала открыть бота в Telegram и нажать «Старт» (/start).`;
      } else if (data.error_code === 401 || (data.description && data.description.toLowerCase().includes('unauthorized'))) {
        humanMessage = 'Недействительный TELEGRAM_BOT_TOKEN (Unauthorized). Токен был отозван или изменён в @BotFather. Пожалуйста, укажите актуальный токен в файле .env.';
      }

      return {
        status: 502,
        success: false,
        error: 'TELEGRAM_API_ERROR',
        message: humanMessage,
        details: {
          telegramError: data.description,
          chatId: chatId,
          errorCode: data.error_code
        }
      };
    }

    return {
      status: 200,
      success: true,
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.',
      messageId: data.result?.message_id
    };

  } catch (error) {
    console.error('[MixProduct Backend] Network error communicating with Telegram:', error);
    return {
      status: 500,
      success: false,
      error: 'SERVER_NETWORK_ERROR',
      message: 'Не удалось связаться с серверами Telegram. Попробуйте еще раз или позвоните нам напрямую.'
    };
  }
}

function escapeHtml(text) {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
