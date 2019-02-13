// ============================== SIMPLE FUNCTION DRILLS
// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

function returnTwo() {
    return 2;
}
console.log(returnTwo());


// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

function returnName(name) {
    return name.toString;
}
console.log(returnName);




// 3) Make a function called addThree() which takes in a number input
// and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

function addThree(input) {
return input + 3;
}
console.log(addThree(5));





// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

function sayString(input) {
    return input;
}
console.log(sayString);



// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value
//?????????
function sayHowdy(input) {
    return ("Howdy" + "!");
}
console.log(sayHowdy);




// =================== CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.
function identity(input) {
    return input;
}

// Write a function called `getRandomNumber(min, max)` that returns
// a random number between min and max values sent to that function call.

function getRandomNumber(min, max) {
    return


}
// Write a function called `first(input)` that returns the first character in
// the provided string.
//?????????
function first(input) {
    first = str.charAt(0);
    return  first;
}




// Write a function called `last(input)` that returns the last character of a string.
//?????????
function last(input) {
    last = str.charAt();
}

// Write a function called `rest(input)` that returns everything but the first character of a string.
// Write a function called `reverse(input)` that takes a string and returns it reversed.
// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
// Write a function called `count(input)` that takes in a string and returns the number of characters.
// Write a function called `add(a, b)` that returns the sum of a and b

function add(a, b) {
    return a + b;
}


// Write a function called `subtract(a, b)` that return the difference between the two inputs.
// Write `multiply(a, b)` function that returns the product
// Write a divide(numerator, denominator) function that returns a divided by b
// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.
// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.


// ========================== EVEN MORE FUNCTION BONUSES
// 1) Create a function that will return how many whitespace characters are at the beginning and end of a string.
// 2) Create a function that takes in two string inputs. If the second string input is present in the first, return the first input string with the second input string removed from it. If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string. If the second string input is not present in the first, return the first string as entered in the function.
// 3) Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
// 4) EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
// 5) Create a function returnTrueMessage() that returns the string "Hey, it's true!"
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiment passing in different functions.




// 6) Create a function, willLoginUser() that takes in a username string, password string, user age,
// a boolean indicating if they are an admin. The function will return true if the username is not the
// same as the password and the user is at least 18 years old. If the user is an admin, they do not have
// to be a certain age but the password must still not match the username.
var userName = prompt("username");
var password = prompt("password");
var age = prompt("What is your age?");
var admin = confirm("are you admin?");


function willLogInUser(userName, password, age, admin) {
    if ((userName !== password) && (admin || +age >= 18)) {
        return true;
    } else {
        return false; }
} console.log(willLogInUser(userName, password, age, admin));





// ========================= CONDITIONALS BONUSES
// __
// Write a function makeJustinMessage() that returns the string "It's Justin!" if the
// input to the function is the string "justin" and "It's not Justin" otherwise.
// If the input contains white space or numbers, return the string "INVALID INPUT".
//
// __
// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.
// __
// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
//
//
// __
// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//
//
// __
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
//
//
//
// __
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
// __
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
// __





// ============================= GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//
//
//============================= DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units







