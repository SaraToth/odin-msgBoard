const { Router } = require("express");
const indexRouter = Router();
const messages = require("../data/messages");
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.get);

indexRouter.post("/new", indexController.post);

module.exports = indexRouter;
