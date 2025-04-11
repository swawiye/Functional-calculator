// Display clicked value
function display(value) {
    document.getElementById("calc-screen").value += value;
};

//Calculates the result
function calculate() {
    const screen = document.getElementById("calc-screen");
    const addBtn = document.getElementById("addBtn");
    const subBtn = document.getElementById("subBtn");
    const prodBtn = document.getElementById("prodBtn");
    const divBtn = document.getElementById("divBtn");
}

// Clearing the screen
function clearScreen() {
    document.getElementById("calc-screen").value = "";
};


//DESTRUCTUTING OBJECTS & ARRAYS

//Destructuring Objects 
const person = {
    name: "Marley",
    gender: "Female",
    age: 15,
    hometown: "Mangoni",
    nationality: "Nepali",
    hobbies: ["reading, archery, painting"],
};

const {name, gender, age = 45} = person;
//const {name, ...rest} = person;

console.log(person.name, person.gender, person.age = 45);


//Destructuring Arrays



