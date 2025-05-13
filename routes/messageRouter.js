const { Router } = require("express");
const messageRouter = Router();

// Path "/" = /new
messageRouter.get("/", (req, res) => {
    res.render("form", { title: "New Message" });
});
// res.render("form", )

module.exports = messageRouter;