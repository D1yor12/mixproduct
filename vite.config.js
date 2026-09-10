import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { sendTelegramNotification } from './server/telegram.js';

// Load environment variables for Vite dev server context
dotenv.config();

function telegramApiPlugin() {
  return {
    name: 'telegram-api-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const parsed = body ? JSON.parse(body) : {};
              const result = await sendTelegramNotification(parsed);
              res.statusCode = result.status || 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result));
            } catch (err) {
              console.error('[Vite Dev API Error]', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: 'SERVER_ERROR',
                message: 'Ошибка обработки запроса на локальном сервере Vite.'
              }));
            }
          });
        } else {
          next();
        }
      });

      server.middlewares.use('/api/health', (req, res, next) => {
        if (req.method === 'GET') {
          const isConfigured = Boolean(
            process.env.TELEGRAM_BOT_TOKEN && 
            process.env.TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE'
          );
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            status: 'ok',
            store: 'MixProduct',
            bot: '@MixProduct_UzBot',
            chatId: process.env.TELEGRAM_CHAT_ID || '5605837016',
            telegramIntegrationReady: isConfigured,
          }));
        } else {
          next();
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), telegramApiPlugin()],
  server: {
    port: 5173,
    host: true,
  }
});
