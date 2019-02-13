

//-- WHILE LOOPS EXERCISE ------

//-- Problem 1 ----------------------------------
//     Create a file named while.js in the js directory.
//     Create a while loop that uses console.log() to create the output shown below.
//
//     2
//     4
//     8
//     16
//     32
//     64
//     128
//     256
//     512
//     1024
//     2048
//     4096
//     8192
//     16384
//     32768
//     65536
// --------------------------


var i = 1;

while (i < 65536) {
    i = i * 2;
    console.log(i);
}



//-- Problem 2 ----------------------
// Ice Cream Cones

// An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100 representing
// the amount of cones to sell. Your code should generate numbers between 1 and 5,
// simulating the amount of cones being bought by her clients. Use a do-while loop to
// log to the console the amount of cones sold to each person. This is how you get the
// random numbers.

//  This is how you get a random number between 50 and 100:
//     var allCones = Math.floor(Math.random() * 50) + 50;

//  This expression will generate a random number between 1 and 5:
//     Math.floor(Math.random() * 5) + 1;



//  The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones

//////////////////////////////

// ANSWER


"use strict";
//logs even numbers from 2 - 65536
var x = 2;
while(x <= 65536){
    console.log(x);
    x += x;
}

//ice cream cones
//generates a random number btw 50-100
var allCones = Math.floor(Math.random() * 50) + 50;

//ice cream cone loop simulator
//log out how many cones i have
console.log("I have " + allCones + " cones.");
do {
    //generates random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;

    console.log(cones + " cone/s sold...")
    //subtract cones sold from total
    allCones -= cones
    //log new total
    console.log(allCones + " cone/s left.")

    if (allCones === 0) {
        console.log("Yayy! I sold all my cones!");
    }

    if ((cones > allCones) && (allCones !== 0)) {
        console.log("Can't sell you " + cones + " cones, I only have " + allCones);
        console.log("Did you want to buy my last " + allCones + " cone/s?")
        console.log(allCones + " more cones sold..");
        allCones -= allCones
        console.log("Yayy! I sold all my cones!");
    }

} while ((allCones - cones >= 0));




























