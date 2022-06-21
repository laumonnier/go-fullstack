const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la première de la deuxième réponse du serveur !');
});

server.listen(process.env.PORT || 3000);