const { Router } = require("express");
const messageRouter = Router();
const messageController = require("../controllers/messageController");

// Path "/" = /new
messageRouter.get("/", messageController.get);

module.exports = messageRouter;