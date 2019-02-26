// ============= Loops and Array Bonuses =================

//  1.  Create an array of shapes

//      – prompt the user to search for a specific shape
//      – using a for loop, iterate through the array to log the shapes until the matching shape is found
//      – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

    // var shapes = ['circle', 'square', 'triangle', 'rectangle'];
    // var question = prompt('Search for a shape: ');


    // for (var i = 0; i < shapes.length; i++) {
    //     if (question === shapes[i]);
    //     };

    /// GET ANSWER anwar ///








// 2.  Create a function that returns a random day of the week

    var daysOfTheWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    function giveRandomDay() {
        var randomDay = Math.floor(Math.random() * 7) + 1;
        for (var i = 0; i < daysOfTheWeek.length; i++) {
            if (randomDay === i + 1) {
                return(daysOfTheWeek[i]);
            }
        }
    }
    console.log(giveRandomDay());





// 3.  Create a function that takes a single letter and returns what number the
//     letter is in the alphabet. Ignore case.
//          – someFunction("a") // returns 1
//          – someFunction("z") // returns 26


var alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var letter = prompt('Enter a letter').toLowerCase();

function alpha() {
    for (var i = 0; i < alphabet.length; i++) {
        if (letter === alphabet[i]) {
            return console.log(letter + " is the number " + i)
        }
    }
}
alpha();



// 4.  Create a function that returns the longest string in a given array of
//     string elements.
        /// GET ANSWER adrien//



// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//      – var arr1 = ['bob', 1, true, 1, 2];
//      – var arr2 = [2, null, undefined, 0, 2, "apple"]
//      – exampleFunction(arr1, arr2) // returns true
        ///GET ANSWER travis///