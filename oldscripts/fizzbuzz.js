// X Counting from 1 to 100, write each number.
// X Every time a number is divisible by 3, 
//   write Fizz instead of the number.
// X  Every time a number is divisible by 5,
//    write Buzz instead of the number.
// X  Every time a number if divisible by both 3
//    and 5, write Fizz Buzz!

for (var i=1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}