let socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexión con el servidor');
})

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jesse',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
})