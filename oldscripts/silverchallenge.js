// Play four total games next year against the Patriots.
var patriotsWins = 0;
var coltsWins = 4;

// If our record was better, talk some smack.
if (coltsWins > patriotsWins) {
    console.log("Told ya - Patriots stink when they can't cheat.");
}
// If not, talk different smack.
else if (patriotsWins > coltsWins && coltsWins != 0) {
    console.log("Told ya - Patriots win because they cheat.");
}
// If the same, talk even more different smack.
else if (patriotsWins == coltsWins) {
    console.log("Fire Grigson because Pagano didn't mess up.");
}
// If none, then cry.
else if (coltsWins == 0) {
    console.log("Fire Grigson.");
}
