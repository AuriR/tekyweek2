// Bronze
var a = 19;
var b = 40;
console.log("Before swap:");
console.log(a);
console.log(b);

// ok, I need a temp variable to hold the value of a
var c = a;

// alright, no worry about losing the value, go ahead and swap
a = b;
b = c;

console.log("After swap:");
console.log(a);
console.log(b);

// Silver - I already created three vars so might as well use them
var x = 10, y = 50, z = -7;
var result = (x * y) / z;
console.log("Silver answer = " + result);

// Gold
var theNumber = 5;
theNumber--;
var theNewNumber = 15;
theNumber = theNumber - theNewNumber * 2;
theNumber = 5 - theNumber/3;
console.log("After all that math: " + theNumber);
