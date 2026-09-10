import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendTelegramNotification } from './telegram.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Load environment variables from .env
dotenv.config({ path: path.resolve(projectRoot, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// API Health Check
app.get('/api/health', (req, res) => {
  const isConfigured = Boolean(
    process.env.TELEGRAM_BOT_TOKEN && 
    process.env.TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE'
  );

  res.json({
    status: 'ok',
    store: 'MixProduct',
    bot: '@MixProduct_UzBot',
    chatId: process.env.TELEGRAM_CHAT_ID || '5605837016',
    telegramIntegrationReady: isConfigured,
  });
});

// Primary Contact / Request Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, message } = req.body || {};
    const result = await sendTelegramNotification({ name, phone, message });
    res.status(result.status || 200).json(result);
  } catch (error) {
    console.error('Unhandled API error:', error);
    res.status(500).json({
      success: false,
      error: 'INTERNAL_SERVER_ERROR',
      message: 'Внутренняя ошибка сервера при обработке заявки.'
    });
  }
});

// In production, serve static files from dist
const distPath = path.join(projectRoot, 'dist');
app.use(express.static(distPath));

app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  console.log(`[MixProduct Server] Listening on http://localhost:${PORT}`);
  console.log(`[MixProduct Server] Telegram Admin: @Irkinov_Shuhratbek`);
  if (!process.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') {
    console.log(`[MixProduct Server] ⚠️  TELEGRAM_BOT_TOKEN is not set in .env! Requests will report missing credentials.`);
  } else {
    console.log(`[MixProduct Server] ✅ Telegram Bot Token is loaded.`);
  }
});
