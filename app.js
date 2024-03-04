const express = require("express");

const http = require("http");
const app = express();
const server = http.createServer(app);
const employeRouter = require("./routes/employe.js");
const classRouter = require("./routes/classroom.js");
var Employe = require("./models/employe");

const config = require("./config/dbconnection.json");
const mongo = require("mongoose");
const bodyparser = require("body-parser");
const path = require("path");
const io = require("socket.io")(server);
const employeController = require("./controllers/employe");
io.on("connection", (socket) => {
  socket.on("search", async () => {

    const i = await Employe.countDocuments({ salary: { $gte: 4000 } });

    socket.emit("search", i);
  });

  socket.on("disconnect", () => {
    io.emit("msg", { text: " User is diconnected" });
  });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");
mongo
  .connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected"))
  .catch(() => console.log("error"));

server.listen(3000, console.log("server is running"));

app.use("/employees", employeRouter);
app.use("/class", classRouter);

module.exports = app;
