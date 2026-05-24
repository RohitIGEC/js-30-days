/*console.log("Start");

setTimeout(() => {
    console.log("Hello after 2 sec");
}, 10000);

console.log("End");



*/


/*function hello(callback) {

    console.log("Hello");

    callback();
}

function bye() {

    console.log("Bye");
}

hello(bye);*/


/*
let foodOrder = new Promise((resolve, reject) => {

    let foodReady = true;

    if (foodReady) {
        resolve("Food Delivered");
    } else {
        reject("Food Not Delivered");
    }
});

foodOrder
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});  */


async function eatPizza() {

    let result = await getPizza();

    console.log(result);

    console.log("Eating Pizza 😋");
}

eatPizza();