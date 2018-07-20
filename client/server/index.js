const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port, () => console.log('Listening on port:', port));
