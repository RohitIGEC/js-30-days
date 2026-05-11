




/*let name = "Rohit";
const age = 23;
var city = "Jabalpur";

console.log(name);
console.log(age);
console.log(city);*/

/*let score = 10;
score =20;
console.log(score);*/

const country = "India";
//country = "USA";
console.log(country)  //const not change let change 



// ===============================
// JavaScript Data Types Example
// Copy & Paste into VS Code
// ===============================


// ---------------------------------
// 1. Number Data Type
// ---------------------------------
let age = 25;
let price = 99.99;

console.log("Number Example:");
console.log(age);
console.log(price);


// ---------------------------------
// 2. String Data Type
// ---------------------------------
let name = "Rahul";
let city = 'Mumbai';

console.log("\nString Example:");
console.log(name);
console.log(city);


// ---------------------------------
// 3. Boolean Data Type
// ---------------------------------
let isStudent = true;
let isLoggedIn = false;

console.log("\nBoolean Example:");
console.log(isStudent);
console.log(isLoggedIn);


// ---------------------------------
// 4. Undefined Data Type
// ---------------------------------
let mobile;

console.log("\nUndefined Example:");
console.log(mobile);


// ---------------------------------
// 5. Null Data Type
// ---------------------------------
let account = null;

console.log("\nNull Example:");
console.log(account);


// ---------------------------------
// 6. BigInt Data Type
// ---------------------------------
let bigNumber = 123456789012345678901234567890n;

console.log("\nBigInt Example:");
console.log(bigNumber);


// ---------------------------------
// 7. Symbol Data Type
// ---------------------------------
let uniqueId = Symbol("id");

console.log("\nSymbol Example:");
console.log(uniqueId);


// ---------------------------------
// 8. Object Data Type
// ---------------------------------
let person = {
    name: "Aman",
    age: 22,
    city: "Delhi"
};

console.log("\nObject Example:");
console.log(person);


// ---------------------------------
// 9. Array Data Type
// ---------------------------------
let fruits = ["Apple", "Banana", "Mango"];

console.log("\nArray Example:");
console.log(fruits);


// ---------------------------------
// 10. Function Data Type
// ---------------------------------
function greet() {
    return "Hello JavaScript!";
}

console.log("\nFunction Example:");
console.log(greet());


// ---------------------------------
// typeof Operator Example
// ---------------------------------
console.log("\nChecking Data Types using typeof:");

console.log(typeof age);         // number
console.log(typeof name);        // string
console.log(typeof isStudent);   // boolean
console.log(typeof mobile);      // undefined
console.log(typeof account);     // object (JavaScript bug)
console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueId);    // symbol
console.log(typeof person);      // object
console.log(typeof fruits);      // object
console.log(typeof greet);       // function


// ---------------------------------
// End of Program
// ---------------------------------
console.log("\nAll JavaScript Data Types Completed Successfully!");










// condition and loops 
let age1 = 18;
if(age1 >= 18) {
    console.log("adult");
} else {
    console.log("child");
}