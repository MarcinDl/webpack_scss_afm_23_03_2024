const sum = require("./sum");
// import { sum2 }  from "./sum2";
// import { y }  from "./sum2";
import * as afm from "./sum2";
import style from "./css/index.scss";

console.log("Hello World!");
console.log(sum.sum(1, 2));
console.log(sum.x);
console.log(afm.y);
console.log(afm.sum2(1, 2));
// npm install webpack-dev-server@4.8.0 --save-dev
const heading = document.querySelector("#demo");   
const sumValue = afm.sum2(1, 2);
heading.innerHTML = `1+3 = ${sumValue}`;