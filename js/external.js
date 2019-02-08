"use strict";

//-- JAVASCRIPT with HTML --//


// console.log("Hello from external Javascript!");

alert('Welcome to my Website!');

var userColor = prompt("What is your favorite color?");

alert(userColor + " is my favorite color too!");



// 1. Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//    Do not worry about the real operations to get the values, the goal of these exercises is
//    to understand how real world conditions can be represented with code.


// MOVIE RENTAL

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?


var rentalPerDayDollars = prompt("What is the rental rate per day in dollars?");

var littleMermaidDays = prompt("How many days was the Little Mermaid rented for?");
var brotherBearDays = prompt("How many days wasBrother Bear rented for?");
var herculesDays = prompt("How many days was Hercules rented for?");

var totalRentalCost;

totalRentalCost = (+littleMermaidDays + +brotherBearDays + +herculesDays * rentalPerDayDollars);

totalRentalCost = (littleMermaidDays + brotherBearDays + herculesDays) * rentalPerDayDollars;

alert("The total rental cost is " + "" + "$" + totalRentalCost).toFixed(2);



// CONTRACTOR

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. ' +
// 'Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? ' +
// 'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleHourlyRateDollars = prompt("What is the Google hourly rate in dollars?");
var amazonHourlyRateDollars;
var facebookHourlyRateDollars;

var googleHours = prompt("How many hours were worked at Google?")
var amazonHours;
var facebookHours;

var totalPayment;

totalPayment = googleHours * googleHourlyRateDollars;
totalPayment = amazonHours * amazonHourlyRateDollars;
totalPayment = facebookHours * facebookHourlyRateDollars;

alert("Total wages earned: $" + totalPayment.toFixed(2));



// STUDENT

// A student can be enrolled to a class only if the class is not full and
// the class schedule does not conflict with her current schedule.

var classIsFull = confirm("Confirm that class is full");
var classSchedulesCheck = confirm("Class schedules check out");

var studentEnrolled = !classIsFull && classSchedulesCheck;
alert("Student enrollment status: " + studentEnrolled);





// PRODUCT OFFER


// A product offer can be applied only if a person buys more than 2 items, and
// the offer has not expired. Premium members do not need to buy a specific amount
// of products.

var numberOfItems = prompt("Enter number of items bought"); //number
var offerIsValid = confirm("Offer is valid"); //boolean
var isPremiumMember = confirm("Is a premium member"); //boolean

var productDiscountApplied = (isPremiumMember || Number(numberOfItems) > 2) && offerIsValid;

alert("Product discount status: " + productDiscountApplied);


// ----------------------------------------------


//-- FUNCTIONS --//

// 1. Write a function, isShortWord, that takes in a string and returns the
//    boolean value true if the passed argument is shorter than 5 characters.
//    Return false otherwise.

function isShortWord (string) {
    return string.length < 5;
}

isShortWord("test1");
isShortWord("cat");




// 2. Write a function, isSameLength, that takes in two string inputs and
//    returns the boolean value true if the passed arguments are the same
//    length. Return false otherwise.

function isSameLength(str1, str2) {
    return str1.length === str2.length;
}

console.log(isSameLength("bob", "cat")); // true
console.log(isSameLength("bob", "catasdf")); // false


// 3. Write a function, getSmallerSegment, that takes in a string and a number
//    input. The function should return a substring of the first argument that
//    is as many characters long as the second argument in lowercase.

//    example input: getSmallerSegment("Codeup", 3)
//    example output: "cod"

function getSmallerSegment (string, number) {
    return string.substring(0, number).toLowerCase();
}

console.log(getSmallerSegment("Codeup, 3")); // "cod"
console.log(getSmallerSegment("hello", 2)); // "he"


// --------------------------------------


//-- SCOPE --//

// SIDE EFFECTS vs PURE FUNCTIONS


// functions with side effects
var word = "hello";

function shoutWord(input) {
    return word.toUpperCase();
}

console.log(shoutWord("bird"));


// pure function

// Immediately-Invoked Function Expression:
// IIFE:


// <html>
// <body>
// <script>
// (function() {
//
//
// (can place USE SCTRICT inside IFFE)
//
//
// })();
// The IIFE should wrap everything in the html doc
//
// </script>
// </body>
// </html>





