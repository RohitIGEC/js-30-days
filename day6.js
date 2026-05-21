console.log("JS connected!");

// Elements pakdo
let heading = document.querySelector("#heading");
let btn = document.querySelector("#btn");

// Text badlo
heading.innerHTML = "Maine text badal diya!";

// Button click pe
btn.addEventListener("click", function() {
    heading.innerHTML = "Button click hua!";
    heading.style.color = "red";
    heading.style.fontSize = "50px";
});