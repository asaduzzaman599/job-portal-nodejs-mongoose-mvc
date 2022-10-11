const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());


//routes
const managerRoute = require('./routes/manager.route')
const jobRoute = require('./routes/job.route')
const candidateRoute = require('./routes/candidate.route')


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


app.use("/manager/jobs",managerRoute)
app.use("/jobs",jobRoute)
app.use("/candidates",candidateRoute)



module.exports = app;