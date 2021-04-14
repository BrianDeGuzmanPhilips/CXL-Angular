const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
        credentials: true
      }
});

io.on('connection', socket => {
  console.log('page connected');

  socket.on('tablet-img-switch', data => {
    io.emit('page-img-switch', { page: data.page, img: data.img });
  });

  socket.on('checkIfConnected', () => {
      console.log("getting message from angular app");
  });

  socket.on('tabletSwitch', tabletInfo => {
    io.emit('tabletSwitch', tabletInfo);
    console.log(`tablet page : ${tabletInfo.page}, tablet img: ${tabletInfo.assetNumber}`)
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });
});

server.listen(3000);
console.log("listening on port 3000");