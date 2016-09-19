var firstName = "Auri";
var lastName = "Rahimzadeh";

var myAge = 41.3;

console.log(firstName);
console.log(lastName);
console.log(myAge);

firstName = "Matthew";
lastName = "McClellan";

console.log(firstName);
console.log(lastName);

// Adding two numbers together.
var sum = 2 + 2; // sum is 4
sum = sum + 7; // add 7 to sum and I get 11

// There are a couple types of comments.
/* Single or multi-line
   comment */

console.log(sum);

sum = sum + "Auri";
console.log(sum);

var bankBalance = 100;
var deposit = "10";

// let's see how strings and numbers are treated differently
console.log(bankBalance + deposit);
console.log(bankBalance + (deposit * 1));
console.log(bankBalance + (firstName * 1));

var a = 10, b = 17;

console.log(a);
console.log(b);
sum = a + b;
console.log(sum);

b += a; // same as b = b + a
console.log(b); // writing the value of b
console.log(a == b); // evaluating the expression returns a boolean
console.log(!(a == b)); // "not"ing the expression

