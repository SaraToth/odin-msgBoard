const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");

indexRouter.get("/", indexController.get);

indexRouter.post("/new", indexController.post);

module.exports = indexRouter;
