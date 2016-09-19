/********************************** 
 * Example of if / else if / else *
 **********************************/
var inchesOfSnow = 4;

if (inchesOfSnow >= 12) {
    console.log("It's a snow day!");
} else if (inchesOfSnow >= 4 && inchesOfSnow <= 12) {
    console.log("Waiting to see if school might be canceled...");    
} else {
    console.log("Gotta go to school!");
}

var dayOfWeek = "Tues";

switch (dayOfWeek) {
    case "Mon":
        console.log("Somebody has a case of the Mondays!");
        break;
    case "Tues":
    case "Wed":
    case "Thurs":
    case "Fri":
        console.log("Gotta go to work!");
        break;
    default:
        console.log("Enjoying the weekend!");
        break;
}

// Further down the rabbit hole.
var isWeekend = true;
if (!isWeekend) {
    // Looks like it's a weekday, so act accordingly.
    console.log("It's a weekday.");

    switch (dayOfWeek) {
        case "Mon":
            console.log("Somebody has a case of the Mondays!");
            break;
        case "Tues":
        case "Wed":
        case "Thurs":
        case "Fri":
            console.log("Gotta go to work!");
            break;
    }

    console.log("Done doing stuff for the weekday.");
}
