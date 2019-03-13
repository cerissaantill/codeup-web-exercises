
"use strict";

/**
 * PROMISES EXERCISES:
 *
 Write a function named wait that accepts a number as a parameter, and
 returns a promise that resolves after the passed number of milliseconds. */

//  wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//  wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    function wait(seconds){
        return new Promise(((resolve, reject) => {

            setTimeout(() => {
                console.log("You\'ll see this after " + seconds + " seconds")
            }, seconds * 1000);
        }))
    }

    wait(2);
    wait(3);



// WALKTHROUGH ... doesn't work perfectly

    // const wait = (milliseconds) => {
    //     return new Promise ((resolve, reject) => {
    //
    //         setTimeout(() => {
    //             resolve(`You'll see this after ${milliseconds / 1000}`)
    //         }, milliseconds)
    //
    //         }
    //     ).then((message) => console.log(message));
    // };
    //
    // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



/**
 Generate a Personal Access Token for the github api.

 We will use this so that we don't get rate limited when talking to the
 github api. You can add the token to your requests like this:     */

//  fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})




/**
 Create a function that accepts a github username, and returns a promise that
 resolves with the date of the last commit that user made. Reference the
 github api documentation to achieve this.   */


    fetch('https://api.github.com/users/cerissaantill')

        .then((data) => {

            return data.json();

        })

        .then((jsonData) => {

        console.log(jsonData.login)

    });



























