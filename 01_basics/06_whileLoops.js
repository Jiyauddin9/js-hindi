// let number = 99;

// while(number>=0){
//     console.log(number + " bottles of beer on the wall, " + number + " bottles of beer.")
//     number--;
//     if(number === 0 ){
//         console.log("No more bottles of beer on the wall, no more bottles of beer.")
//     }
//     console.log("Take one down and pass it around, " + number + " bottles of beer on the wall.")
// }



var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}