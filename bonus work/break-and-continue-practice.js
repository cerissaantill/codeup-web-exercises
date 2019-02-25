//  2/23/19  Saturday  study-group @Megan's

"use strict"

// we created the following:

// Break & Continue :
// good for looking through an array

// If /Else :
// place more specific commands at top.
// place more universal commands toward bottom.




// 1. Console log even and odd numbers up to 50.

        for(var i = 0; i <= 100; i++) {
            if(i === 50) {
                break;
            } else if(i % 2 === 1) {
                console.log('Even number: ' + i);
            } else if(i % 2 === 0) {
                console.log('Odd numbers: ' + i);
            }
        }

    // Refactor into While loop:

        var i=0;
        while (i < 101) {
            i++;
            if(i === 50) {
                continue;
            } else if(i % 2 === 1) {
                console.log('Even number: ' + i);
            } else if(i % 2 === 0) {
                console.log('Odd numbers: ' + i);
            }
        }


        // if increment is at bottom of conditional -> infinite loop
        // place increment higher than the break or continue, else infinite loop.



    // Refactor into do while loop:

    do{
        i++;
        if(i===50) {
            continue;
        } else if(i % 2 === 1) {
            console.log('Odd number: ' + i);
        } else if(i % 2 === 0) {
            console.log('Even number: ' + i);
        }
    }while (i <= 99);









//////////////////////////////////////////////

//  BREAK & CONTINUE  >>  from Justin via Slack 2.13.19  //

// ================================ BREAK / CONTINUE

// break - keyword to end the execution of a loop

// var y = 0;
//
// while (true) {
//     if (y === 10) {
//         console.log("End of loop!");
//         break;
//     }
//     ++y;
//     console.log(y);
// }

// web example

// var password;
//
// while (true) {
//     password = prompt("Please enter the password: ");
//     if (password === "123") {
//         break;
//     }
// }
//
// console.log("Access granted.");

// game example

// var gameRunning = true;
//
// var lives = 3;
//
// while (gameRunning) {
//     // play game
//     if (lives === 0) {
//         console.log("Game over");
//         break;
//     }
// }


// continue

// for (var i = 1; i <= 10; i += 1) {
//    if (i === 5) {
//        continue;
//    }
//    console.log(i);
// }



// var y = 0;
//
// while (true) {
//     y++;
//     if (y === 100) {
//         console.log("End of loop!");
//         break;
//     }
//     if (y % 5 === 0) {
//         continue;
//     }
//     console.log(y);
// }


// web example using break and continue

/*
    Display a list of weather info by year up to 1983
    in which a region experienced drought.
        - Skip any years (continue) that do not meet the drought criteria.
        - Once 1984 weather data is reached, break the loop
 */

// buildHTMLWeatherYear(data);
//
// var outputHTML = "";
// for (var i = 0; i <= weatherCollection; i++) {
//     if (weatherCollection[i].year > 1984) {
//         break;
//     }
//     if (weatherCollection[i].droughtConditions === false) {
//         continue;
//     }
//     outputHTML += buildHTMLWeatherYear(weatherCollection[i]);
// }
//
// displayInBrowser(outputHTML);





