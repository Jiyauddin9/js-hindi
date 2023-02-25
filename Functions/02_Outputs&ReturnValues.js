function getMilk(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
    
    console.log("buy " + calculateBottles(money, costPerBottle) + " bottles of Milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    return calcuChange(money,costPerBottle);
  }


function calculateBottles(startingMoney, costPerBottle) {
    let numOfBottles = Math.floor(startingMoney / costPerBottle);
    return numOfBottles;
}

function calcuChange(startigAmmount, costPerBottle) {
    let change = startigAmmount % costPerBottle;
    return change;
}

console.log("Hello master, here is your " + getMilk(10, 3) + " change."); 