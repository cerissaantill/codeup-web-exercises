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








