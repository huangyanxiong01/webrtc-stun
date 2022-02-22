import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer();
const io = new Server(httpServer);

io.on('connection', (socket) => {

  socket.broadcast.emit("joined", socket.id)

  socket.on('offer', (offer) => {
    socket.broadcast.emit('offer', offer);
  });

  socket.on('answer', (answer) => {
    socket.broadcast.emit('answer', answer);
  });

  socket.on('candidate', (candidate) => {
    socket.broadcast.emit('candidate', candidate);
  });
});

httpServer.listen(3009, () => {
  console.log('websocket server started at ws://localhost:3009');
});
