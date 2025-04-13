// Append the input to the calculator screen
const display = document.getElementById("calc-screen");
function appendToDisplay(input) {
    display.value += input;
};

// Clearing the screen
function clearScreen() {
    //document.getElementById("calc-screen").value = "";
    display.value = "";
};

//Calculation
function calculate() {
    //'expr' is the string on the calc screen (ex: "5 + 5")
    const expr = display.value; 

    // '.match(...)' -tries to find parts of the string that fit the pattern inside the parentheses
    const match = expr.match(/^(\d+)([+\-*/])(\d+)$/);
    // '^' -start of the string
    // '(\d+)' -first number: one or more digits (ex: "12") — captured as group 1
    // ([+\-*/])   Operator: one character, either +, -, *, or / — captured as group 2
    // (\d+)    Second number: one or more digits (e.g., "3") — captured as group 3
    // $    End of the string
    if (!match) {
        display.value = "Error";
        return;
    }
    const a = parseFloat(match[1]);//converts the string to a floating-point number
    const operator = match[2];
    const b = parseFloat(match[3]);
    const operations = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => y !== 0 ? x / y : "Error" //if y is not 0 the operation is completed otherwise it is an error
    };
}




