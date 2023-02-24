function lifeInWeeks(age) {
    let totalLiveAge = 90;
    let yearsRemaining = totalLiveAge - age;

    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")

}

let age = 12;
lifeInWeeks(age);