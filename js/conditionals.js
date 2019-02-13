"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 *########################################## */

// function numChecker() {
    var answer = confirm("Would you like to enter a number?");


    if (confirm("Would you like to enter a number")) {
        var number = prompt("Choose a number.")
        } else { alert("Sad face :(")}

        number = Number(number);



        if (!isNaN(number)) {

            if (number % 2 === 0) {
                alert("Your number is even.");
            } else {
                alert("Your number is odd.");
            }

            alert("Your number + 100 is " + (+number + 100));

            if (number > 0) {
                alert("Your number is positive.");
            } else if (number < 0) {
                alert("Your number is negative.");
            } else {
                alert("This is not a number.");
            }

        } else {
            alert("Fine then.");
        }


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
// will contain a different color every time the page loads)

// Reactivate:
/* var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)]; */

function analyzeColor(name) {
    name = prompt("Name a color, and see if its the 3 on our list");
    name = name.toUpperCase();
    switch(name) {
        case "RED":
            alert("Strawberries are red");
            break;
        case "BLUE":
            alert("The sky is blue");
            break;
        case "CYAN":
            alert("I don't know anything about cyan");
            break;
        default:
            alert("Sorry thats not one of the colors on our list");
            break;
    }
}







/**
* TODO:
* Pass the `randomColor` variable to your function and console.log the results.
* You should see a different message every time you refresh the page
*/



/**
* TODO:
* Refactor your above function to use a switch-case statement
*/



/**
* TODO:
* Prompt the user for a color when the page loads, and pass the input from the
* user to your `analyzeColor` function. Alert the return value from your
* function to show it to the user.
*/



/* ########################################################################## */

/**
* TODO:
* Suppose there's a promotion in Walmart, each customer is given a randomly
* generated "lucky number" between 0 and 5. If your lucky number is 0 you have
* no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
* the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
* all for free!.
*
* Write a function named `calculateTotal` that accepts a lucky number and total
* amount, and returns the discounted price.
*
* Example:
* calculateTotal(0, 100) // returns 100
* calculateTotal(4, 100) // returns 50
* calculateTotal(5, 100) // returns 0
*
* Test your function by passing it various values and checking for the expected
* return value.
*/


    function calculateTotal(luckyNum, customerTotal) {
        switch(luckyNum) {
            case 0:
                return customerTotal * 1.0;
            case 1:
                return customerTotal * 0.9;
            case 2:
                return customerTotal *   ;
            case 3:
                return customerTotal *  ;
            case 4:
                return customerTotal *  ;




                return 0;
            default:
                return "no";
        }
    }

    var randomTotal = Math.floor(Math.random() * 300) +1;

















function calculateTotal(discount_price, amount) {
    amount = prompt("How much is the total bill?");
    discount_price = amount - (discount_price * amount);
    console.log("Your total bill, before discount, is $" + amount);
    console.log("Your total after the discount is $" + discount_price);
}





/**
* TODO:
* Uncomment the line below to generate a random number between 0 and 6.
* Prompt the user for their total bill, then use your `calculateTotal` function
* and alerts to display to the user what their lucky number was, what their
* price before the discount was, and what their price after the discount is.
*/
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6)


