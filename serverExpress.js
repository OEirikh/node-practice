const express = require("express");
const app = express();
const PORT = 8090;

app.get("/home", (req, res) => {
  res.sendStatus(200);
});

const serverExpres = app.listen(PORT, (err) => {
  if (err) {
    console.log("Error at anver launch:", err);
  }
  console.log(`serverExpres works at port ${PORT}`);
});

module.exports = {
  serverExpres,
};
