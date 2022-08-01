//Create a calculator that can do multiple outcomes

//Prompt the user to enter the 1st number and convert the string to number format
let numberA = Number(prompt("Please enter the 1st number: "));

//Prompt the user to enter the 2nd number and convert the string to number format
let numberB = Number(prompt("Please enter the 2nd number: "));

//Create a function for adding A and B
function add(a, b) {
    let total = a + b;
    return total;
}

//Create a function for subtracting B from A
function subtract(a, b) {
    let total = a - b;
    return total;
}

//Create a function for multiplying A with B
function multiply(a, b) {
    let total = a * b;
    return total;
}

//Create a function for dividing A by B
function divide(a, b) {
    let total = a / b;
    return total;
}

//Prompt the user which function he/she would like to use
let performFunction = prompt("Which function would you like to perform for the 2 numbers?\n a - Add\n s - Subtract\n m - Multiply\n d - Divide");

//Create a copy of the performFunction before it gets switched
let copyOfPerformFunction = performFunction.slice();

//Switch the short letter for the function that needs to be performed.
switch (performFunction) {
    case "a":
        performFunction = add;
        break;
    case "s":
        performFunction = subtract;
        break;
    case "m":
        performFunction = multiply;
        break;
    case "d":
        performFunction = divide;
        break;
}

//Switch the letter of the Copy of the function to be performed with the correct mathematical sign
switch (copyOfPerformFunction) {
    case "a":
        copyOfPerformFunction = " + ";
        break;
    case "s":
        copyOfPerformFunction = " - ";
        break;
    case "m":
        copyOfPerformFunction = " x ";
        break;
    case "d":
        copyOfPerformFunction = " / ";
        break;
}

//Display on console the result
console.log(numberA + copyOfPerformFunction + numberB + " = " + (performFunction(numberA, numberB)));