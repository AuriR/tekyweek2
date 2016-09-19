// BRONZE: 
// Write a function that returns your age, name it getAge().
function getAge() {
    return 41;
}

var age = getAge();
console.log(age);

// SILVER:
// Write a function that is passed two integers as parameters, and returns their sum.
function add(a, b) {
    return a+b;
}
console.log(add(2, 2));

// GOLD:
// Write a function that is passed a String, then returns the word backwards.(i.e. Bacon becomes nocab)
function reverse(string) {
    var result = "";
    for(var i=string.length-1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

console.log(reverse("Backwords"));
