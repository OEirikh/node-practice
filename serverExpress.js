const express = require("express");
const morgan = require("morgan"); // logger
const app = express();
const PORT = 8090;

// Mime types
// .css - text/css
// .csv - text/csv
// .html - text/html
// .gif - image/gif
// .js - text/javascript
// .json - aplication/json
// .txt - text/plain
// .xml - aplication/xml
// Url encoded - aplication/x-www-from-urlencoded - для  передачі данних з форм (нативних)

// middleware------
app.use(express.json());
//забирати дані з форми
app.use(express.urlencoded({ extended: true }));
//орбить директорію публічною
app.use(express.static("public"));
// npm i morgan
app.use(morgan("tiny"));

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
//   next();
// });

app.get(
  "/home", // routing + requestHandler(middlewares)
  (req, res) => {
    res.send(" get request");
  }
);

app.post("/home", (req, res) => {
  if (!req.body.GOIT) {
    return res.status(403).json({ status: "GOIT parametr is required" });
  }
  // console.log(req.body);
  // res.json({ typeRequest: " post request", body: req.body });
});

app.delete("/delete", (req, res) => {
  res.send(" delete request");
});

app.use((req, res) => {
  res.status(403).send("middleware request");
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
