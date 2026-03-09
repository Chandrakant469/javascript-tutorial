const accountId = 144553
let accountEmail = "chandrakant@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;


// accountId = 2 not allowed

accountEmail = "chandu@gmail.com"
accountPassword = "65454"
accountCity = "Nashik"

console.log(accountId);

// prefer not to use var 
// because of issue in block scope and fucntional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
