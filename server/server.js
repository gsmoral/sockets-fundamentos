const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// Middleware para habilitar la carpeta public
app.use(express.static(publicPath));


// IO = esta es la comunicación del back-end
//let io = socketIO(server); Lo comento, en la siguiente fila lo exporto para poder utilizarlo desde socket.js
module.exports.io = socketIO(server);
require('./sockets/socket');


//app.listen(port, (err) => {
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});