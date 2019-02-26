
// -- BREAK & CONTINUE -------------


//-- Problem 1 ------------------
// Prompt Us For Input


// Prompt the user for an odd number between 1 and 50. Use a loop and a
// break statement to continue prompting the user if they enter invalid input.

// Use a loop and the continue statement to output all the odd numbers between
// 1 and 50, except for the number the user entered.

// Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


// ANSWER ---

// planning steps for this problem:
// prompt user for input
// isNaN
// out of range
// even number



// CHECK AGAINST GITHUB
var input;

while(true) {
    input = prompt("Please enter an odd number from 1 - 50");
    if(isNaN(input)) {
        alert("That is not a number. Please try again.");
        continue;
    }
    if(input < 1 || input > 50) {
        alert("Number is out of range. Please try again.");
        continue;
    }
    if(input % 2 === 0) {
        alert("Number must be odd. Try again.");
    } else {
        break;
    }
}
console.log(input);

for(var i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
        continue;
    }
    if(i == input) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }
}







//
// var random = Math.floor((Math.random()* 50)+1);
//
// console.log("Random odd number to skip is: " + random);
//
//
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 === 0) {
//         // Skip the even numbers.
//         continue;
//     }
//
//     if (random === i) {
//         console.log("Yikes! Skipping number: " + i);
//     } else {
//         console.log("Here is an odd number: " + i);
//     }
//
//     if (i >= 49) {
//         break;
//     }
// }
//



