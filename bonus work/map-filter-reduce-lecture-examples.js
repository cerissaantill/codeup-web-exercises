
"use strict";

// Map & Filter return a new array
// Reduce returns one value
// ((Emoji example))

// map, filter, reduce only work on collections




/** MAP EXERCISE
 * -- create an array of numbers, map through and add each number's index to its value.
 * -- for example: [1,2,3,4,5] would become [1,3,5,7,9]
*/

        const numbers = [1,2,3,4,5];

        const newNumbers = numbers.map(n => n = numbers.indexOf(n));
        console.log(newNumbers);



//  filter out all odd numbers (in vanilla js)
        const oddNumbers = numbers.filter(function(n) {
            return n % 2 !== 0;
        });
        console.log(oddNumbers);



// in es6:
        const oddNumbers = numbers.filter(n => n % 2 !== 0);
        console.log(oddNumbers);




// count the number of times a color appears in an array.
        const colors = ['red', 'orange', 'red', 'blue', 'blue', 'green', 'red'];

        // vanilla js
        function countColors(array) {
            const colorCountObject = array.reduce((totalColors, color) => {
                if (typeof totalColors[color] === 'undefined') {
                    totalColors[color] = 1;
                } else {
                    totalColors
                return totalColors;
            }
            });
            return colorCountObject;
        };
        console.log(countColors(colors));




// map through an array of strings using reduce
        const lyrics = ['we', 'all', 'live', 'in', 'a', 'yellow', 'submarine'];
        const oneLine = lyrics.reduce((previous, current) => previous + ' ' + current);
        console.log(oneLine);

        // in es6:
// /**** unfinished ****/
        // const oneLine = lyrics.reduce ((previous, current) => )






// create an array of 5 objects with properties 'firstName' and 'lastName'






// map through the objects and return a message like this: "Good Morning, ${firstName} and ${lastName}






// let's add an array of numbers using reduce

        const numbers = [11,25,34,47,5,6,7,8,9,10];

    //vanilla js
        const sum = numbers.reduce(function(total, currentNumber){
            return total + currentNumber;
        });
        console.log(sum);

    // es6
        const sum = numbers.reduce((total,currentNumber) => total + currentNumber, 25
        );
        console.log(sum);





 /** FILTER EXERCISES
  * -- create an array of 1's and 0's.
  * [1,1,
  * -- filter through to create an array with all 1's.
  * -- filter through to create an array with all 0's.
  */
        const binary = [1,1,1,1,0,0,1,1,1,1];

        const ones = binary.filter(n => n == true);
        console.log(ones);

        const zeroes = binary.filter (n => n == false);
        console.log(zeroes);


  /** -- create an array of fruit and vegetable objects with properties 'name' and 'type' */

        const produce = [
            {name: 'kiwi', type: 'fruit'},
            {name: 'mango', type: 'fruit'},
            {name: 'coconut', type: 'fruit'},
            {name: 'asparagus', type: 'vegetable'},
            {name: 'sweet potato', type: 'vegetable'}
  ];