




// Write a function named triple(n) that returns a number times 3
    function triple(n){
        return n*3;
    }
    console.log(triple(4));

// ============================ SIMPLE FUNCTION DRILLS
// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())
    function returnTwo() {
        return 2;
    }
    console.log(returnTwo());

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())
    function returnName() {
        return 'Cerissa';
        }
    console.log(returnName());

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))
    function addThree(num) {
        return num+3;
    }
    console.log(addThree(5));

// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

 // XX   function sayString() {
 //    }
 //    console.log(sayString());



// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value
    function sayHowdy() {
        return 'Howdy!';
    }
    console.log(sayHowdy());



// ============================ CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input
// and returns that input.
    function identity(input) {
        return input;
    }


// Write a function called `getRandomNumber(min, max)` that returns a random number
// between min and max values sent to that function call.
    var random = Math.floor((Math.random() * 10) + 1);
    function getRandomNumber(min, max) {
     return random;
    }
    console.log(getRandomNumber());




// Write a function called `first(input)` that returns the first character in the
// provided string.
    function first(input) {

    }

// Write a function called `last(input)` that returns the last character of a string

// Write a function called `rest(input)` that returns everything but the first character of a string.

// Write a function called `reverse(input)` that takes a string and returns it reversed.

// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
    function isNumeric(input) {
        return !isNaN(input);
    }


// Write a function called `count(input)` that takes in a string and returns the number of characters.

// Write a function called `add(a, b)` that returns the sum of a and b.


// Write a function called `subtract(a, b)` that return the difference between the two inputs.

// Write `multiply(a, b)` function that returns the product


// Write a divide(numerator, denominator) function that returns a divided by b

// Write a function named divide(a, b) that returns a divided by b.
    function divide(a,b) {
        var c = a/b;
        return c;
    }

    function tripleSum(a, b){
    return triple(a) + triple(b);
    }
    //console.log(tripleSum(2, 3));



// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.




// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.





//
// ================================= EVEN MORE FUNCTION BONUSES
// 1) Create a function that will return how many whitespace characters are at the beginning and end of a string.

// 2) Create a function that takes in two string inputs. If the second string input is present in the first, return the first input string with the second input string removed from it. If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string. If the second string input is not present in the first, return the first string as entered in the function.

// 3) Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).

// 4) EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).

// 5) Create a function returnTrueMessage() that returns the string "Hey, it's true!"

// Create a function returnFalseMessage() that returns the string "Hey, it's false!"

// Create a function returnMessage() that takes in a function and returns the call to the function

// Experiment passing in different functions.

// 6) Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin. The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.









// Write a function named invertSign(number) that returns a negative version of a positive number,
// a positive version of negative, and false for all else.

    function invertSign(num) {
        if(num === 0) {
            return 0;
        }
        else if(!isNaN(+num)) {
            return -num;
        } else if (num === null || num === true);
        else {
            return false;
        }
    }

    console.log(invertSign(-10));
    console.log(invertSign(400));
    console.log(invertSign(0));
    console.log(invertSign('dog'));
    console.log(invertSign(null));
    console.log(invertSign( true));
    console.log(invertSign('7'));
    console.log(invertSign(''));

// ways to knock out edge cases


// what to start with in a conditional?

// keep the simple stuff on top.
// the first if statement should be the 'good outcome'
// else should be the 'bad outcome' or the false outputs or type coercions.


////////////////////////////////////
// typeOf always returns a string.
// null returns an object.
// unary+ sign makes what follows it a number.
// parseFloat returns a string as a number
///////////////////////////////////


























