const express = require("express");
const path = require("path");

const app = new express();
app.use(express.static("./dist/clock-in-system"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "dist/clock-in-system/" });
});

app.listen(process.env.PORT || 8080);
