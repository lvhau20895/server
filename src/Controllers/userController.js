const models = require("../Models/init-models");

const login = async (req, res) => {
	const data = await models.user_type.findAll();
	res.status(200).json({ message: "ok", result: data });
};

module.exports = { login };
