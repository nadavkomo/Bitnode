module.exports = {
    connectSockets,
    emit
}

var gIo = null

function emit(eventName, data) {
    gIo.emit(eventName, data)
}

function connectSockets(io) {
    // io.on('connection', socket => {
    //     socket.on('chat newMsg', ({ name, message }) => {
    //       io.emit('chat newMsg', { name, message })
    //     })
    //   })
    io.on('connection', socket => {
        gIo = io
        socket.on('chat newMsg', msg => {
            io.to(socket.myTopic).emit('chat newMsg', msg)
        })
        socket.on('chat topic', topic => {
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;
        })
        socket.on('updateTask', contact => {
            io.emit('updatesTask', contact)
        })

    })
}