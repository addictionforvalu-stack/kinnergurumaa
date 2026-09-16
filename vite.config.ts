import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'save-uploaded-images-api',
        configureServer(server) {
          server.middlewares.use('/api/save-service-images', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body);
                  const servicesDir = path.resolve(__dirname, 'public/services');
                  if (!fs.existsSync(servicesDir)) {
                    fs.mkdirSync(servicesDir, { recursive: true });
                  }

                  const filenameMap: Record<string, string> = {
                    'get-your-ex-love-back': 'photo_6147413831123146504_y.jpg',
                    'breakup-problem-solution': 'photo_6147413831123146505_y.jpg',
                    'intercast-marriage-solution': 'photo_6147413831123146506_y.jpg',
                    'divorce-problem-solution': 'photo_6147413831123146507_y.jpg',
                    'love-marriage-solution': 'photo_6147413831123146508_y.jpg',
                    'marriage-problem-solution': 'photo_6147413831123146509_y.jpg',
                    'husband-wife-solution': 'photo_6147413831123146510_y.jpg',
                    'love-problem-solution': 'photo_6147413831123146511_y.jpg',
                    'get-your-love-back': 'photo_6147413831123146512_y.jpg',
                  };

                  let savedCount = 0;
                  for (const [key, dataUrl] of Object.entries(data)) {
                    if (typeof dataUrl === 'string' && dataUrl.startsWith('data:image')) {
                      const matches = dataUrl.match(/^data:image\/[a-zA-Z0-9.+_-]+;base64,(.+)$/);
                      if (matches && matches[1]) {
                        const buffer = Buffer.from(matches[1], 'base64');
                        fs.writeFileSync(path.join(servicesDir, `${key}.jpg`), buffer);
                        if (filenameMap[key]) {
                          fs.writeFileSync(path.join(servicesDir, filenameMap[key]), buffer);
                        }
                        savedCount++;
                      }
                    }
                  }
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, saved: savedCount }));
                } catch (err) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: String(err) }));
                }
              });
            } else {
              res.statusCode = 405;
              res.end('Method Not Allowed');
            }
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
