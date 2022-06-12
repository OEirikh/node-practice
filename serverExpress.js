const express = require("express");
const app = express();
const cors = require("cors"); // кросдоменні запроси
const morgan = require("morgan"); // logger
const axios = require("axios").default;
const url = require("url");

// process.env
const PORT = process.env.PORT || 8090;
const baseURL = "https://api.weatherbit.io/v2.0/current?";
const API_KEY = process.env.API_KEY;
// || "4dfb5f3408fa452a81a30bb5e31050e7";

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
//робить директорію публічною
app.use(express.static("public"));
// npm i morgan // logger
app.use(morgan("tiny"));
app.use(cors());

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
//   next();
// });

// app.get(
//   "/home", // routing + requestHandler(middlewares)
//   (req, res) => {
//     res.send(" get request");
//   }
// );

// app.post("/home", (req, res) => {
//   if (!req.body.GOIT) {
//     return res.status(403).json({ status: "GOIT parametr is required" });
//   }
// console.log(req.body);
// res.json({ typeRequest: " post request", body: req.body });
// });

app.get("/api/weather", async (req, res) => {
  try {
    // req.query.params - параметри запросу від клієнта
    // req.body  - те що присилає клієнт (JSON, XML)
    // req.headers - заголовки запиту

    const { latitude, longitude } = req.query;

    const params = new url.URLSearchParams({
      key: API_KEY,
      lat: latitude,
      lon: longitude,
    });

    if (!latitude) {
      return res.status(400).json({ message: "latitude parametr is requaire" });
    }

    if (!longitude) {
      return res
        .status(400)
        .json({ message: "longitude parametr is requaire" });
    }

    const { data } = await axios(baseURL + params.toString());

    const [
      {
        city_name,
        weather: { description },
        temp,
        timezone,
      },
    ] = data.data;

    console.log(city_name, description, temp, timezone);

    res.status(200).json({ city_name, description, temp, timezone });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// app.delete("/delete", (req, res) => {
//   res.send(" delete request");
// });

// app.use((req, res) => {
//   res.status(403).send("middleware request");
// });

const serverExpres = app.listen(PORT, (err) => {
  if (err) {
    console.log("Error at anver launch:", err);
  }
  console.log(`serverExpres works at port ${PORT}`);
});

module.exports = {
  serverExpres,
};
