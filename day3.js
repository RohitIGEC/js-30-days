/*function namaste (naam) {
.    console.log("Hello, " + naam + "|" );
}

namaste("Rahul");
namaste("rohit");
namaste("Shikha");



function with return 
function add(a, b){
    return a+b ;

}
let result = add (5, 3);
console.log(result);



Arrow functionArrow functions in JavaScript are used to write functions in a shorter and cleaner way

Arrow Function Summary
Arrow function in JavaScript is a short way to write functions.
Syntax
const add = (a, b) => a + b;
Why Use It?


Short and clean code


Modern JavaScript style


Handles this better


Common in React and callbacks


Normal vs Arrow
// Normal Functionfunction hello() {  console.log("Hi");}// Arrow Functionconst hello = () => {  console.log("Hi");};
Arrow functions make code simpler and easier to read 

return → value function ke bahar bhejta haiReal Life Example

Function ek juice machine ki tarah hai 🍹

Fruits andar gaye → input
Machine process karti hai
Juice bahar aata hai → return value 🚀🚀


const add = (a, b) => {
    return a + b;
}

result = add(5, 3);

console.log(result);

Simple Rule
Type	Syntax
Normal Function	function add(){}
Arrow Function	const add = () => {}

=> arrow function ki identity hai 🚀

const great = () => "hello";
console.log(great());



let name = "rahul"; 

function greet () {
    console.log(name);
}

greet ();//call  
console.log(name);


Main Point 😊

Function ke andar name mila kyuki:

JavaScript pehle function ke andar variable dhundta hai
nahi milta to bahar/global scope me check karta hai

Aur waha name = "Rohit" mil gaya


local function scope

Real Life Example 🏠

secret ek bedroom diary jaisa hai 📔

Bedroom ke andar → dekh sakte ho
Bahar hall me → access nahi 😄

Isi ko function scope bolte hain 🚀


function myFunc(){
    let secret = "hedden";
    console.log(secret);
}
myFunc()
    console.log(secret);


    Aisa isliye hota hai kyuki JavaScript variables ko unke scope area ke according control karta hai 😊
function myFunc() {    let secret = "hidden";}
Yaha:
let secret
function ke andar bana hai.
To JavaScript bolta hai:

“Ye variable sirf isi function ke andar use hoga” 🔒

Isliye function khatam hote hi:


variable ka access bhi khatam


bahar se use nahi kar sakte



JavaScript Aisa Kyu Karta Hai?
1. Security 🔒
Secret cheeze bahar na jaye.
2. Memory Save 💾
Function khatam → variable remove.
3. Avoid Confusion 😵
Same variable names alag functions me use kar sakte ho.
Example:
function a() {  let x = 10;}function b() {  let x = 20;}
Dono safe hain 😄

Real Life Example 🏠
Bedroom ki almari ka key sirf room ke andar hai 🔑
Bahar wale log directly use nahi kar sakte.
Waise hi:
let secret
sirf function ke room me available hai 🚀




















Real Life Example 🔒

Block scope locker jaisa hota hai 😊

{
   let money = 500;
}

Paise locker ke andar hain 💰

Locker ke andar → access allowed
Locker ke bahar → access denied ❌

Isi ko block scope bolte hain 🚀



{
   let age = 20;
   console.log(age);
}

//console.log(age);







hoisting
Real Life Example 📚

Socho school me attendance list pehle se ready hai 😄

Naam pehle register me aa gaya
Student baad me class me aaya

Waise hi:

JavaScript pehle declarations yaad karta hai
baad me code execute karta hai

Isi ko hoisting bolte hain 😊
*/



greet();
function greet(){
    console.log("I am greet");
}