//This program we will do word manipulation from a given word by the user

//Prompt the user to give a work
let word = prompt("Please enter a word: ");

//Get the lenth of the word that was entered to be used in future programming
let wordLength = word.length;

//Idetify veriable to be stored the new word with the exclamation marks in
let newExclamationWord = "";

//Identify the item that we want to change every 2nd letter to
let addedLetter = "!";

//Create a for loop based on lenth of the word the number of time the loop must run
for (i = 0; i < wordLength; i += 2) {
    //Add the normal letters based on index position example 0,2,4,6
    newExclamationWord += (word[i]);
    //Create an if statement - every 2nd number example 1,3,5 to be raplaced with '!'
    //If statement to be used otherwise words like 'Happy' will be 'H!p!y!' to stay within the index 
    if ((i + 1) < wordLength) {
        newExclamationWord += addedLetter;
    }
}
//Display new word on the console with the 2nd letter '!'
console.log(newExclamationWord)

//Reverse word

// Identify variable Reverseword
// Split the word (String) into an array
//Reverse the letters in the array
let reversedWord = (word.split("")).reverse();

//Join the letters of the array together again to get a string
reversedWord = reversedWord.join("");

//Display reversed word on console
console.log(reversedWord);

//Every 6th letter to Uppercase

//Identify variable uppercase6th
let uppercase6th = "";

//Create a for loop with a set end for the loop on word length
for (a = 0; a < wordLength; a++) {
    //Create an If statement to only change every 6th letter
    if (a > 0 &&
        (a + 1) % 6 == 0) {
        uppercase6th += word[a].toUpperCase();
    }
    //Create an else statement if it is not a 6th letter
    else {
        uppercase6th += word[a];
    }
}
//Display on console the output
console.log(uppercase6th);

// Define variable array for ascii values to be stored in
let asciiWord = [];

//Create a for loop that will stop at the end of the word length
for (b = 0; b < wordLength; b++) {
    //Use the convert each letter to the Ascii value and push/ add it to the array
    asciiWord.push(word.charCodeAt(b));
}

//Display on console the array of Ascii values of the word
console.log(asciiWord);