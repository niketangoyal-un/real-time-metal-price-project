// server.js
const app = require('./app');
const http=require("http")
const httpServer=http.createServer(app)
const socket = require("./utils/socket.js");
const io = socket.init(httpServer);
require('./utils/cronJob'); // just require to start cron

const PORT = 3000;
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
