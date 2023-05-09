const chalk = require("chalk");
const express = require("express");
const { createServer } = require("http");
const router = require("../Routers/rootRouter");
const socketServer = require("./socket");

const app = express();
const port = 9999;

app.use(express.json());
app.use("/api", router);

const http = createServer(app);
socketServer(http);

http.listen(port, () => {
	console.log(chalk.blueBright(`http://localhost:${port}`));
});
