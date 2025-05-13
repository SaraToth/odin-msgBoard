const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true}));
app.use("/", indexRouter);
app.use("/new", messageRouter);

//Catches 404 errors
app.use((req, res, next) => {
    const err = new Error("Page Not Found");
    err.status = 404;
    next(err)
})

//Error handler - currently displays 404 errors only
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500);
    res.render("error");
})

const PORT = 3000;
app.listen(PORT, () => {

})