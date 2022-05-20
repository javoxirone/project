"use strict";

// We cannot define variable without key word when we use "use strict";
// a = 15;
// console.log(a);

let number = 5;
const leftBorderWidth = 10;

number = 10;
console.log(number);

const obj = {
  a: 50,
};

obj.a = 10;

console.log(obj);

var name = "Ivan";

console.log(name);
var name = "Alex";

{
  var result = 50;
}

console.log(result);

// с = 5;
// console.log(c);