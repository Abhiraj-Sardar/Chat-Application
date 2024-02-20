const io=require('socket.io')(8000) //taking the port 8000

// Socket.io is a library that allows bi-directional communication 
//between a client and a server. Socket.on is a method that listens for incoming messages.

const users={};

io.on('connection',(socket)=>{
    socket.on('new-user-joined',(name)=>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name); //let other use that one person joined
    })

    socket.on('send',(message)=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    })
})

