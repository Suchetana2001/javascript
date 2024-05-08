const accountId = 14455
let accountEmail = "suchetanamukherjee527@gmail.com"
var accountPassword = "1234"
accountCity = "Kolkata"
let accountState;
//prefer not to use var.because of issue in block scope & functional scope

//accountId = 12344 //not allowed
accountEmail = "abc@edu.in"
accountPassword = "124"
accountCity = "howrah"

console.log(accountId);
console.table([accountEmail,accountCity,accountPassword,accountState]);