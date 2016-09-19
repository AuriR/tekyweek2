// Count backwords from 100 by 5
for(var num = 100; num >= 0; num -= 5){
    console.log(num);
}

// Count to 10 with a while loop
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Count backwards from 100 with a while loop.
i = 100;
while(i >= 0) {
    console.log(i);
    i--;
}

// Count backwards from 100 with a while loop.
// If it's divisible by 25, print that it is.
i = 100;
while(i >= 0) {
    // If it's divisible by 25, print that.
    if (i % 25 == 0 && i != 0) {
      console.log(i + " is divisible by 25.");        
    }
    // Otherwise, just print the number.
    else {
      console.log(i);
    }
    // No matter what, increment i.
    i--;
}
