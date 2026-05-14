//Object
/*
let person = {
    name: "Rohit",
    age: 22,
    city: "Delhi"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);




// Array 

let arr = ["Rahul", 22, "Delhi"];


// Object

let person1 = {
    name: "Rahul",
    age: 22,
    city: "Delhi"
};


//function
// Normal function 
function greet() {
    console.log("Hello!");
}

greet(); // Call   



let person2 = {
    name: "Rahul",
    age: 22,
    greet: "Hello!"  // String add 
};

console.log(person2.greet);


let person3 = {
    name: "Rohit",
    age: 22,
    greet: function() {
        console.log("Hello! Mera naam " + person3.name + " hai!");
    }
};

person3.greet();


//Destructuring 

let person4 = {
    name: "Rahul",
    age: 22
};


let name = person4.name;
let age = person4.age;

console.log(name);
console.log(age);

*/

let person = {
    name: "Rahul",
    age: 22
};

// Purana tarika
let a = person.name;
let b = person.age;
console.log(a);
console.log(b);

// Destructuring tarika
let { name, age } = person;
console.log(name);
console.log(age);