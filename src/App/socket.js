const { Server } = require("socket.io");

const socketServer = http => {
	const io = new Server(http, {
		cors: { origin: "*" }
	});

	io.on("connection", socket => {
		console.log(socket.id);
		io.emit("send", socket.id);
	});
};

module.exports = socketServer;
