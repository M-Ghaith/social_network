const express = require("express");
const port = process.env.PORT || 1337;
const mongoos = require("mongoose");

const app = express();

//DB config
const db = require("./config/keys").mongoURL;

//Conneect to mLap
mongoos
  .connect(db)
  .then(() => console.log("Database connected."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hi Ghaith, sup?"));

app.listen(port, () => console.log(`Server running on port ${port}`));
