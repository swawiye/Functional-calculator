// Display clicked value
function display(value) {
    document.getElementById("calc-screen").value += value;
}

//Calculates the result
function calculate() {
    document.getElementById("calculateBtn").value = "";
};

/*
function calculate() {
    const screen = document.getElementById("calc-screen");
    const expression = screen.value;

     Data validation
    if (/^[0-9+\-/.() ]+$/.test(expression)) {
        try {
            const result = new Function(`return ${expression}`)(); // Similar to eval but limited
            screen.value = result;
        } catch {
            screen.value = "Error";
        }
    } else {
        screen.value = "Error";
    }
}
*/

// Clearing the screen
function clearScreen() {
    document.getElementById("calc-screen").value = "";
}