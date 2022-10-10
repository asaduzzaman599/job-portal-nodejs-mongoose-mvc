const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());


//routes


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});




module.exports = app;