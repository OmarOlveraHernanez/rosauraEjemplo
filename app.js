const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola, mundo!\n');
});

const port = 3001;
server.listen(port, () => {
  console.log(`Servidor en ejecución hola mundo  en http://localhost:${port}`);
});
