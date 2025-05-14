const { Router } = require("express");
const messageRouter = Router();
const messageController = require("../controllers/messageController");

// Path "/" = /new
messageRouter.get("/", messageController.get);
messageRouter.get("/message/:id", messageController.getPage);

module.exports = messageRouter;