const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // rota da home
    if (req.url === '/' && req.method === 'GET') {
        const html = fs.readFileSync(path.join(__dirname, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
        return;
    }
  
    if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Página sobre o projeto.');
        return;
    }

    if (req.url === '/api/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ mensagem: 'Olá do servidor!' }));
        res.end();
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 - Página não encontrada');
});


server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
