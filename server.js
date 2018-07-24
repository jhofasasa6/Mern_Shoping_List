const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//bodyParsr middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/key").mongoURL;

//Connect to Mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connect..."))
  .catch(err => console.log(err));

//use Routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}'`));
