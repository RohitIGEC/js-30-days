// Day 4 Arrays! 
//Topic - Push/pop, Map, Filter, Reduce, Spread, Destructuring 


// step 1 - Array Basics 
// code print apple 
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]);    // Apple

//code length 
console.log(fruits.length);   //3 


// --now push and pop
let fruits1 = ["Apple", "Mango"];
//Add
fruits1.push("banana");
console.log(fruits1);
//pop 

let fruits2 = ["Apple", "Mango", "Banana"];
fruits2.pop();
console.log(fruits2);//[ 'Apple', 'Mango' ]  //[ 'Apple', 'Mango', 'banana' ]





// Step 2 -- Map
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num *2 );
console.log(doubled);    //[ 2, 4, 6, 8, 10 ]

//Real Life Example let marks = [50, 60, 70];
//let updated = marks.map(mark => mark + 5);

//nsole.log(updated); //55, 65, 75]

/*
let names = ["rohit", "amit", "sumit"];

let upper = names.map(name => name.toUpperCase());

console.log(upper);   //["ROHIT", "AMIT", "SUMIT"]*/


//filter____--


let numbers1 = [1, 2, 3, 4, 5, 6];
let evennumbers = numbers1.filter(n => n%2 === 0);
console.log(evennumbers);

//--Reduce 


let numbers2= [1, 2, 3, 4, 5, 6];
let total = numbers2.reduce((s , n ) => s + n, 0);
console.log(total);  //21



//spread 

let numbers3= [1, 2, 3];

console.log(...numbers3);



let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];

console.log(result);


let user = {
  name: "Rohit",
  age: 20
};

let newUser = {
  ...user,
  city: "Jabalpur"
};

console.log(newUser);

// Destructuring 

let values = [10, 20];

let [firstValue, secondValue] = values;

console.log(firstValue);
console.log(secondValue);


//challenge 
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddnum = numbers4.filter(n => n%2 !==0);
console.log(oddnum);
