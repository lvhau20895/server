const { Sequelize } = require("sequelize");
const config = require("./config");
const chalk = require("chalk");

const sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	port: config.port,
	dialect: config.dialect,
	logging: false
});

module.exports = sequelize;

// node src/Configs/connect.js
try {
	sequelize.authenticate();
	console.log(chalk.greenBright("Connect Database Success"));
} catch (error) {
	console.log(error);
}
