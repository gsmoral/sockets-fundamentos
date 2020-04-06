const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    // Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escucha al cliente (listener)
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        })

        // if (message.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!'
        //     });
        // }

    });

});