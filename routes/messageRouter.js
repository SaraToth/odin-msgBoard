const { Router } = require("express");
const messageRouter = Router();

// Path "/" = /new
messageRouter.get("/", (req, res) => res.send("New Message"));

module.exports = messageRouter;