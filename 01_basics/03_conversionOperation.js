let score = 33;
let valueInNumber = Number(score)

console.log(typeof(score)) //for type check
//console.log(typeof score) //for type check
console.log(typeof valueInNumber)
console.log(valueInNumber)
//convert to number
//"33"=>33
//"33abc"=>NaN
//true=>1 false=>0
//null=>0
//undefined=>NaN
let isLoggedIn=1;
let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn)
//1=>true 0=>false

let num=33 
let stringNum=String(num)

console.log(stringNum)
console.log(typeof stringNum);

//*************operation ***************
let val=3
let negVal=-val;
console.log(negVal);

// console.log(3+3)
// console.log(3-3);
// console.log(3*3);
// console.log(3**3);
// console.log(3/3);
// console.log(3%3);

let s1="hello"
let s2=" manta"
let s3=s1+s2
console.log(s3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"1"+2);

console.log(2+3*(6%2));
console.log(true);
console.log(+true);
console.log(+"");

let num1,num2,num3;
num1=num2=num3=3+3;

/*If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.*/

/*If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/
let gameCounter=100;
let x=gameCounter++;
console.log(x);

let gameCounter1=100;
let y=++gameCounter1;
console.log(y);