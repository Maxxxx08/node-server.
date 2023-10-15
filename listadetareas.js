const http = require('http');

const host = 'localhost';
const port = 8000;

const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Limpiar la casa', completed: true },
  { id: 3, description: 'Hacer ejercicio', completed: false }
];

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify(tasks));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Servidor en ejecución en http://${host}:${port}`);
});
