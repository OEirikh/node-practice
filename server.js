// const http = require("http");
// const fs = require("fs");

// const manifest = fs.readFileSync("./package.json", "utf8");

// const requestHandler = (req, res) => {
//   if (req.url.indexOf("/home") >= 0) {
//     res.writeHead(200, { "Content-type": "text/json" });
//     return res.end(manifest);
//   }
//   // -
//   res.writeHead(200, { "Content-type": "text/json" });
//   res.write(
//     JSON.stringify({
//       a: "123",
//       b: ["OTHER"],
//     })
//   );
//   res.end();
// };

// const server = http.createServer(requestHandler);

// module.exports = {
//   server,
// };
