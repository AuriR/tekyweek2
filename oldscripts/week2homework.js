// Problem 1
// Show how you would determine the location of the number 27 in the array:
// var numArray = [18, 24, 57, 98, 45 27, 3, 456, 3, 35, 85];
// Store its location in a variable.
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

// Alternate, yet OK method
var itemIndex = numArray.indexOf(27);

// For loop method:
for(var i = 0; i < numArray.length; i++) {
    if (numArray[i] == 27) {
        itemIndex = i;
        break;
    }
}

// Problem 2
// Using the same array from Problem 1, calculate the sum of all numbers in the array and assign the sum to a variable.
var sum = 0;
for(var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
}

// Alternative approach:
for(var i = 0, sum = 0; i < numArray.length; sum += numArray[i++]);

// Problem 3
// Initialize a new array and fill it with the numbers 1 through 10. 
// Then, remove the last element of the array.
// Output the array to the console.
var arr = [];
for(var i = 1; i <= 10; i++) {
    arr.push(i);
}

// Alternative approach to creating the array:
for(var i = 1; i <= 10; i++) {
    arr[i-1] = i;
}

// Remove the last element of the array.
arr.pop(arr.length - 1);

console.log(arr);

// Problem 4
// Create a function with two parameters.
// This function will be passed two numbers as arguments.
// Calculate the sum of the parameters.
// If the sum is less than or equal to 25, the function should return true.
// If not it should return false. 
// Be sure to use an appropriate function name.

// Create a function with two parameters.
// This function will be passed two numbers as arguments.
function sumGreaterThan25 (num1, num2) {
    var sum = num1 + num2;
    if (sum <= 25) {
        return true;
    }
    else {
        return false;
    }
}

// Alternative approach with result variable:
function sumGreaterThan25 (num1, num2) {
    var result = false;

    if (num1 <= 25) {
        result = true;
    }
    else {
        result = false;
    }

    return result;
}

function sumGreaterThan25 (num1, num2) {

    return num1 + num2 <= 25;

}

console.log(sumGreaterThan25(0, 25));

// Problem 5
// Create a function with two parameters. 
// This function will be passed two strings as arguments. 
// Combine both of these strings and assign the result to a variable.
// If this new string is longer than 12 characters, return 
// "Error, string too long.". Otherwise, return the variable that stores
// the new string. Be sure to use an appropriate function name.

// Create a function with two parameters. 
// This function will be passed two strings as arguments. 
function stringLengthIsValid (str1, str2) {
    var result = str1 + str2;
    if (result.length > 12) {
        return "Error, string too long.";
    } else {
        return result;
    }
}

// Example using ternary operator:
function stringLengthIsValid (str1, str2) {

    var result = str1 + str2;
    return result.length > 12 ? "Error, string too long." : result;

}

console.log(stringLengthIsValid("abcdefghi", "a"));

// Problem 6
// Design a while loop that counts from 0 to 20 
// using the variable num. If num is between 0 and 5
// output "Very Low Number" to the console. If it is 
// between 6 and 10 output "Low Number" to the console. 
// If it is between 11-15 output "High Number" to the console.
// For everything else output "Very High Number" to the console.

var num = 0;
while (num <= 20) {

    if (num <= 5) {
        console.log("Very Low Number");
    } 
    else if (num <= 10) {
        console.log("Low Number");
    }
    else if (num <= 15) {
        console.log("High Number");
    }
    else {
        console.log("Very High Number");
    }

    // Prevent infinite loops.
    num++;
}
