//Create a list of 10 numbers and work out certain qualities / values of the list of numbers captured.

//Identify veriable for the list of numbers to be captured in
let numberList = [];

//Identify the variable of how many numbers need to be captured and when the loop will end.
let amountNumbersCaptured = 10;

//Identify variable Sum of Numbers and Count of Numbers
let sumValueNumbers = 0;
let countNumbers = 0;

//Create a for loop because it will run a set number of times
for (i = 0; i < amountNumbersCaptured; i++) {
    //Ask the user to input a number
    let NumberAdded = Number(prompt("Please enter a number? \n Can be a whole or decimal number."));
    //Add the number to the array that the user has entered
    numberList.push(NumberAdded);
    //Create a sum of the Numbers
    sumValueNumbers += NumberAdded
    //Count the number of entries if want to use it later
    countNumbers++
}

// Option 1 to get the Total of all the numbers

//Display on console the Sum of the numbers
console.log("The sum of the numbers is :" + sumValueNumbers);

// Option 2 to get the Total of all the number

//Identify variable Sum of nunbers - different name to the top to illustrate option 2
let sumValueNumbers2 = 0
//Identify each value by forEach formula and add the items together
numberList.forEach(item => {
    sumValueNumbers2 += item;
})
//Display on console the Sum of the numbers
console.log("The sum of the numbers is :" + sumValueNumbers2);

//Find the Maximum number with the Math.max function
//Find the index of the maximum number with indexOf
//Display on the console the Index of the maximum number
console.log("The index of the maximum number is: " + numberList.indexOf((Math.max(...numberList))));

//Find the Minimum number with the Math.min function
//Find the index of the minimum number with indexOf
//Display on console the Index of the minimum number
console.log("The index of the minimum number is: " + numberList.indexOf((Math.min(...numberList))));

//Create a round function to round off 2 decimal places
function roundto2Decimal(roundNumber) {
    let roundNumber100 = roundNumber * 100;
    return ((Math.round(roundNumber100)) / 100);
}

//Calculate average Option 1
//Sum of Total values devided by the count of values
//Use the new Round function to round to 2 decimals
let average = roundto2Decimal(sumValueNumbers / countNumbers);

console.log("The Average is: " + average);

//Calculate average Option 2
//Sum of each value (Calculated in line 30) devided by mount of numbers captured.
//Use the new Round function to round to 2 decimals
let average2 = roundto2Decimal(sumValueNumbers2 / amountNumbersCaptured);
console.log("The Average is: " + average2);

//Get the Median of the array

//Arrange numbers in ascending order to get the median middle of all the numbers
let ascentNumberList = numberList.sort((a, b) => a - b);

// Use an If formula - not needed because we know its 10 numbers but if we want to change the range at a later stage.

// If devisable by 2 - there is 2 numbers in the middle example number position 5 and 6 out of 10
if (countNumbers % 2 == 0) {
    //Get the middle of the count range example 5 of 10
    let medianMiddle = (countNumbers / 2);
    // Index starts at 0 so we need to '-1' to get the correct index value
    // Add the 2 middle numbers together and devide it by 2 to get the true median - (position 5 and 6 together) in this example - Index 4 and 5
    let median = (ascentNumberList[(medianMiddle - 1)] + ascentNumberList[medianMiddle]) / 2;
    // Display on console a message to the user with the median
    console.log("The Median is: " + median)
}

//This section is extra - if the numbers were to change to a total of an uneven number
else if (countNumbers % 2 == 1) {
    // Get the middle of the range - if uneven number will have a .5 so need to round up to get an integer example 4.5 to 5 if range was 9 numbers
    let medianMiddle = Math.round(countNumbers / 2);
    //Index starts at 0 so need to (-1) to get from length to index example position 5 index 4 if there was 9 numbers
    let median = ascentNumberList[(medianMiddle - 1)]
    // Display on console a message to the user with the median
    console.log("The Median is: " + median)
}