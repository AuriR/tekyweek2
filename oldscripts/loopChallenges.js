// BRONZE: 
// Create a loop that prints out all numbers from 0-30 with the exception of 3, 13, and 17.
for (var i=0; i <= 30; i++) {
    // Exclude 3, 13, and 17
    if (i != 3 && i != 13 && i != 17) {
        console.log(i);
    }
}

// alternative approach:
for (var i=0; i <= 30; i++) {
    // Exclude 3, 13, and 17
    if (i == 3 || i == 13 || i == 17) {
        continue;
    }
    console.log(i);
}

// SILVER:
// Create a loop that creates a String full of all numbers between 10-50
// “1011121314151617…” 

var result = "";
for (var i=10; i <= 50; i++) {
    // add the numbers together
    // ...because result is a string,
    // js will add the number as a string
    result += i;
}

console.log(result);

// GOLD:
// Create a loop that prints out the first 20 numbers of the fibonacci sequence

console.log("\n\n--- Beginning Fibonacci Sequence ---\n\n");
var sequences = 2;
var a = 0, b = 1, c = 1; 

while (sequences < 100)
{
	// Calculate and display the current fibonacci value.
	c = a + b;
	console.log(c);
	
	// Do the swap.
	a = b;
	b = c;

	// Increment sequence.
	sequences++;
}

console.log("\n\n--- Done with Fibonacci Sequence ---\n\n");

