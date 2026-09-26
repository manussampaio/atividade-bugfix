const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Rota da home
  if (req.url === '/' && req.method === 'GET') {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
    return;
  }



})

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})
