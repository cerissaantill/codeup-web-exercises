
//-- FOR LOOPS EXERCISE ---------------


//-- Problem 1 ------------
// Times Table

// Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number (just multiply by the
// numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

//ANSWER ---

// (FOR LOOP STRUCTURE):
// for (initialization; condition; increment/decrement)

function showMultiplicationTable(num) {
   for (var i = 1; i <= 10; i += 1) {
       console.log(num + " * " + i + " = " + (num*i));
   }
}
console.log(showMultiplicationTable(7));





//-- Problem 2 ---------------
// 10 Random Numbers

// Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.
// For example:
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...

// ANSWER ---

for (var i = 1; i <= 10; i++) {
    var randNum = Math.floor(Math.random() * 180) +20;
    if (randNum % 2 === 0) {
        console.log(i + ": " + randNum + " is even!");
    } else {
        console.log(i + ": " + randNum + " is odd!");
    }
}




//-- Problem 3 -----------------
// Create a for loop that uses console.log to create the output shown below.
// Half Triangle

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


// ANSWER ---

for (var i = 1; i <= 9; i += 1) {
    if (i === 1) {
        console.log(i);
    }
    if (i === 2) {
        console.log("" + i+i);
    }
    if (i === 3) {
        console.log("" + i+i+i);
    }
    if (i === 4) {
        console.log("" + i+i+i+i);
    }
    if (i === 5) {
        console.log("" + i+i+i+i+i)
    }
    if (i === 6) {
        console.log("" + i+i+i+i+i+i);
    }
    if (i === 7) {
        console.log("" + i+i+i+i+i+i+i);
    }
    if (i === 8) {
        console.log("" + i+i+i+i+i+i+i+i);
    }
    if (i === 9) {
        console.log("" + i+i+i+i+i+i+i+i+i);
    }
}

// another ANSWER ---

// for (var r = 1; r < 10; r++) {
//     var print ='';
//     for (var j=1; j<=r; j++) {
//         print += r;
//     }
//     console.log(print);
// }




//-- Problem 4 ------------------
// Decrease by 5

// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}












