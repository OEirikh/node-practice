const { getCurrentDate } = require("./dateUtils");
// const { server } = require("./server");
const { serverExpress } = require("./serverExpress");
const Calc = require("calc-js").Calc;
const fs = require("fs");

// console.log(`getCurrentDate ${getCurrentDate()}`);
// console.log(global.test);
// console.log(process.env);
// console.log(process.argv);

// [, , a, b] = process.argv;

const a = process.argv[2];
const b = process.argv[3];

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish()); // parseInt() - округляє до цілого числа
// console.log(new Calc(parseFloat(a)).minus(parseFloat(b)).finish()); // parseFloat(a) - число 'повністю'

// ----- path -----

// Normalization
// console.log(
//   "normalization : " + path.normalize("test/test1//2slashes/1slash/tab/..")
// );

//Join
// console.log(
//   "Join : " + path.join("test", "test1", "2slashes/1slash", "tab", "..")
// );

//Resolve
// console.log("Resolve : " + path.resolve("dateUtils.js"));

//extName
// console.log("ext name : " + path.extname("dateUtils.js"));

// ------- fs ------

fs.readFile("./data.txt", "utf8", (error, data) => {
  if (error) {
    console.error(errror);
  }
  console.log(data);
});

// console.log("module :", module);

// -------- server -------

// PORTS:
// almost 250000
// to 1024 administrator rights
// http - 80
// https - 443
// 8080, 8081
// const PORT = 8081;

// server.listen(PORT, (err) => {
//   if (err) {
//     console.log("Error at anver launch:", err);
//   }
//   console.log(`Server works at port ${PORT}`);
// });
