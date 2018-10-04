const express = require("express");
const port = process.env.PORT || 1337;
const mongoos = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//URL middleware handler
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURL;

//Conneect to mLap
mongoos
  .connect(db)
  .then(() => console.log("Database connected."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hi Ghaith, Sup?"));

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.listen(port, () => console.log(`Server running on port ${port}`));
