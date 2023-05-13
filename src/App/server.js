const chalk = require("chalk");
const express = require("express");
const { createServer } = require("http");
const socketServer = require("./socket");
const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://demo:20081995@website.rttx94h.mongodb.net/demo?retryWrites=true&w=majority"
		);
		console.log("connect database success");
	} catch (error) {
		console.log(error);
	}
};
connectDB();

const UserSchema = new mongoose.Schema(
	{
		name: { type: String },
		profile: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Profile"
		}
	},
	{
		timestamps: true
	}
);

const User = mongoose.model("User", UserSchema);

const app = express();
const port = 1995;

app.use(express.json());
app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/get-user", async (req, res) => {
	const data = await User.find();
	res.json(data);
});
const http = createServer(app);
socketServer(http);

http.listen(port, () => {
	console.log(chalk.blueBright(`http://localhost:${port}`));
});
