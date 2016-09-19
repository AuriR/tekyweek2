// while

var count = 1;
while(count <= 5) {
    console.log(count);
    count++;
}

var correctAnswerEntered = true;

while (!correctAnswerEntered) {
    // Keep asking them to answer the question
}

// for each
var names = ["Bob", "Steve", "Janine", "Linus"];
console.log(names.length);
console.log("Supercalifragilisticexpiolidocious".length);
var longWord = "Supercalifragilisticexpiolidocious";
console.log(longWord.length);
console.log(names[2]);






// var names = ["Bob", "Steve", "Janine", "Linus"];

for(var position in names) {
    console.log(names[position]);
}

// for each item in the "names" variable

// create a variable name position and get the first item in names
var position = /* first item in names */ 0;
console.log(names[position]);

// ok - get the next item in the collection: 1
var position = /* next item in names */ 1;












for (var i = 0; i < names.length; i++) {
    var position = i;
    console.log(names[position]);
}







for(var n in names) {
    var name = names[n];
    if (name[0] == "B" || name[0] == "b") {
        console.log("Name starts with B: " + names[n]);
    }
}

// for

console.log("\n\n\n\n");
for (var i=1; i <= 100; i+=2) {
    console.log(i);
}

// do while
var enteredCorrectAnswer = false;
do {
    // ask for guess
    enteredCorrectAnswer = true; // so there's no infinite loop
} while (!enteredCorrectAnswer);
