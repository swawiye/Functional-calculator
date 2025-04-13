// Display clicked value- append the input to the calculator screen
const display = document.getElementById("calc-screen");
function appendToDisplay(input) {
    display.value += input;
};

//Calculates the result
function calculate() {
    const screen = document.getElementById("calc-screen");
    const addBtn = document.getElementById("addBtn");
    const subBtn = document.getElementById("subBtn");
    const prodBtn = document.getElementById("prodBtn");
    const divBtn = document.getElementById("divBtn");

    addBtn.addEventListener('click', function () {
        
    })
}

// Clearing the screen
function clearScreen() {
    document.getElementById("calc-screen").value = "";
};







