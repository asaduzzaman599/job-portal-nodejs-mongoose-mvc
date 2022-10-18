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
const userRoute = require('./routes/user.route')
const adminRoute = require('./routes/admin.route')


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


app.use("/manager",managerRoute)
app.use("/jobs",jobRoute)
app.use("/candidates",candidateRoute)
app.use("/user",userRoute)
app.use("/admin",adminRoute)



module.exports = app;