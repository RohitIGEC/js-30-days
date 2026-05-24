
/*
// Object jaisa dikhta hai — par string hota hai!
let user = {
    "name": "Rahul",
    "age": 22,
    "city": "Delhi"
};

// Object → JSON String
let jsonString = JSON.stringify(user);
console.log(jsonString);

// JSON String → Object
let backToObject = JSON.parse(jsonString);
console.log(backToObject.name);




async function getJoke() {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    console.log(data.setup);
    console.log(data.punchline);
}

getJoke();*/


// Data save karo
localStorage.setItem("name", "Rahul");
localStorage.setItem("age", "22");

// Data nikalo
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name);
console.log(age);

// Data delete karo
// localStorage.removeItem("name");
// localStorage.clear();