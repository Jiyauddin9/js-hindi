const accountId = 144553
let accountEmail = "jani@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;
// accountId = 2 // not allowed in const variable.

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bangluru"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// prefer not to use var
// because of issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);