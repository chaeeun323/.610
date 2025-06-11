import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  const requestPath = req.url.split('?')[0];
  let filePath = path.join(__dirname, requestPath);

  if (requestPath === '/' || requestPath === '') {
    filePath = path.join(__dirname, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath).slice(1);
    const mimeTypes = {
      html: 'text/html',
      js: 'text/javascript',
      mjs: 'text/javascript',
      css: 'text/css',
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      gif: 'image/gif',
      mp4: 'video/mp4',
      webm: 'video/webm',
      json: 'application/json'
    };

    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
