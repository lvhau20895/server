const express = require("express");
const { login } = require("../Controllers/userController");
const userRouter = express.Router();

userRouter.get("/login", login);

module.exports = userRouter;
