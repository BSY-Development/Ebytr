const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const root = require('../controllers/root');
const error = require('../middleware/error');
const get = require('../models/document/get');

io.on('connection', (socket) => {
  socket.on('update', async () => {
    const result = await get();
    io.emit('updateData', result);
  });
});

app.use(express.json());
app.use(cors());
app.use(error);
app.use('/', root);

module.exports = http;
