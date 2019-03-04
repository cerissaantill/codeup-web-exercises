
// ===========DOM Bonuses ============ //

// BONUS 1 (grocery list APP)

// Allow the user to enter a certain number of items and then display them on the page.
// - for each item, prompt the user for the name of the item, and store in an array of items.
// - for each item in the array of items create a new li element with the correct text and append to the DOM
// - for a simpler alternative, build an entire HTML string and set the innerHTML of an existing <ul> element




// Pseudo Code: prompt user for input, store in a variable, use dom format to create list item,
//          have an empty array stored outside the function,


// var groceryList = [];
//
// function addGroceryList() {
//
//     // var x = prompt('How many grocery items do you need?');
//
//     var z = "";
//
//     for (var i = 0; i < x; i++) {
//
//         // var userInput = prompt('Add an item to your grocery list:');
//
//         var table = document.getElementById('groceryList');
//
//         z += "<li>" + userInput + "</li>";
//
//         table.innerHTML = z;
//
//         groceryList.push(userInput);
//
//     }
// }
//
// addGroceryList();


// BONUS 2 (custom styling)

// In the same dom-bonus.html page, allow the user to select custom styling for the
// page by setting the background color, font color, and font-family for the page.
// Add additional style changes to have fun and experiment!


    function style(){

        var background = prompt('Choose a background color: ');

        document.body.style.background = background;

        var font = prompt('Choose a font style: Arial, Helvetica, Optima');

        document.body.style.fontFamily = font;

        var fontColor = prompt('Select a font color: ')

        document.body.style.color = fontColor;
    }

    style();




// BONUS 3 (profile create form)

// Create a form that will allow the user to enter the following information in
// text inputs:
// firstName
// lastName
// username
// email
// address
// age
// shortBio

// Create a function, createUserProfileDiv() that when run will grab all data in the
// form inputs and build a div with the user's entered information and append it to
// the page. Test it by running it in the JS console.




// ================================= DOM EVENT BONUSES
//
// BONUS 1 - create a stop watch app
//
// 1) stop watch display that shows the time to the nearest 100th of a second
// 2) start button to start the stop watch
// 3) reset button to reset the time to zero
// 4) pause button to stop the stop watch
//
// Additional Features:
//     1) store a list of times in an aside div that are appended to every time the reset button is hit
//     2) add delete buttons for each stored time that removes the time from the aside div
//     3) add keyboard events to control starting, pausing, and resetting








// BONUS 2 - create a Hangman game
//
// Allow user 1 to enter a random word for user 2 to try to guess.
//
// - display the number of guesses
// - display the letters already attempted
// - display the word as it is being completed and the letters not already guessed with underscores
// - a form should allow the user to type a letter guess
// - do not accept inputs that are more than one letter or are not letters (ignore case)







// BONUS 3 - Create a zoomable font size effect with mouse scroll

