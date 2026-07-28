const bodyParser = require("body-parser");
const express = require("express");
const port = 2026;
const app = express();
const path = require("path");
const mongodb = require("./data/database");

app.use(bodyParser.json());

app.use("/", require("./routes"));

mongodb.initdb((err) => {
  if (err) {
    console.log("There is an error connecting to the database", err);
  } else {
    app.listen(port, () => {
      console.log(`The app is running at localhost:${port}`);
    });
  }
});
