const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

app.use("/", indexRouter);
app.use("/new", messageRouter);

const PORT = 3000;
app.listen(PORT, () => {

})