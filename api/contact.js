import { sendTelegramNotification } from '../server/telegram.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Метод ${req.method} не поддерживается` });
  }

  try {
    const result = await sendTelegramNotification(req.body || {});
    return res.status(result.status || 200).json(result);
  } catch (error) {
    console.error('[Serverless API Error]', error);
    return res.status(500).json({
      success: false,
      error: 'SERVERLESS_ERROR',
      message: 'Ошибка обработки заявки на сервере.'
    });
  }
}
