import { square } from "./q1.js";
import { add, sub, div, mul } from "./q2.js";
import Person from './q3.js';
import { alias as friend } from "./q4.js";

import f from "./q5.js";
import {f1} from "./q5.js";
import {name} from "./q6.js";

let c;
if(true){
    const ret=await import('./q7.js');
    c=ret.conditionalImport();
}


import {obj} from "./q8.js";
import { fetchData } from "./q9.js";
import { getMessage } from "./q10.js";



console.log("question 1 : " + square(5));
console.log("question 2 : " + add(5, 6) + " " + sub(5, 6) + " " + mul(5, 6) + " " + div(5, 6));
const p1 = new Person('sahil', 22);
const p2 = new Person('jeeshan', 2);
console.log(p1.showData() + p2.showData());

friend();

console.log(f.name+f.qno);
console.log(f1.name+f1.qno);
console.log(name)
console.log(c);
console.log(obj.objfunc());

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

getMessage();