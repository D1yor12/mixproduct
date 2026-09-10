/**
 * Server-side Telegram Notification Service for MixProduct
 * 
 * Securely delivers customer requests from the website form to the Telegram chat
 * where @Irkinov_Shuhratbek is the administrator.
 * 
 * SECURITY:
 * TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are strictly loaded from server environment
 * variables and NEVER exposed to the frontend/client code.
 */

export async function sendTelegramNotification({ name, phone, message }) {
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
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const isConfigured = 
    botToken && 
    botToken.trim() !== '' && 
    botToken !== 'YOUR_BOT_TOKEN_HERE' && 
    chatId && 
    chatId.trim() !== '' && 
    chatId !== 'YOUR_CHAT_ID_HERE';

  if (!isConfigured) {
    // REALISTIC BEHAVIOR: DO NOT FAKE INTEGRATION
    console.warn('[MixProduct Backend] Telegram credentials missing in .env file (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID).');
    return {
      status: 503,
      success: false,
      error: 'CONFIG_MISSING',
      message: 'Интеграция с Telegram ожидает настройки: в файле .env на сервере не заданы TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID для администратора @Irkinov_Shuhratbek.',
      details: {
        admin: '@Irkinov_Shuhratbek',
        storeChannel: '@mixproduct_uz',
        requiredEnv: ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID']
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

  const telegramText = [
    '🛍 *НОВАЯ ЗАЯВКА — MIXPRODUCT*',
    '',
    `*Имя:* ${escapeMarkdown(trimmedName)}`,
    `*Телефон:* ${escapeMarkdown(trimmedPhone)}`,
    '',
    '*Запрос:*',
    escapeMarkdown(trimmedMessage || 'Консультация по наличию и ценам'),
    '',
    '*Дата:*',
    `${formattedDate} (Ташкент)`,
    '',
    '*Источник:*',
    'Сайт MixProduct'
  ].join('\n');

  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramText,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('[MixProduct Backend] Telegram API error:', data);
      return {
        status: 502,
        success: false,
        error: 'TELEGRAM_API_ERROR',
        message: `Ошибка Telegram API: ${data.description || 'Не удалось отправить сообщение'}`
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

function escapeMarkdown(text) {
  // Escape basic markdown special characters for Telegram Markdown v1
  return text.replace(/([_*`[])/g, '\\$1');
}
