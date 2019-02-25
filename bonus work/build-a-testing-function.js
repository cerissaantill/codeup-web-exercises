

// ================= BUILD A TESTING FUNCTION ====================

//  Create a new static web project in IntelliJ called "custom-assert"

// Figure out how to build a function that tests other functions.
//  This testing function should be defined with three parameters:
//      1. the name of the function to test
//      2. an input to the function to test
//      3. the expected output of the test function when passed the input

//  The function should return true or false based on whether or not the passed
//    function returns the passed output based on the passed input.

//  Test your testing function with the following flawed function which should return false:
//    function returnInputAsOutput(input) {
//     return "input";
//    }

function testAFunction(callback, input, expectedOutput) {
    return callback(input) === expectedOutput;
}

function returnInputAsOutput(input) {
    return input;
}

console.log(testAFunction(returnInputAsOutput, 'bob', 'bob'));
console.log(testAFunction(returnInputAsOutput, 2, 2));
console.log(testAFunction(returnInputAsOutput, true, true));



// What should be fixed to make returnInputAsOutput work correctly?





// ========= TEST FUNCTION ON STEROIDS  =======================//


// consider the following function that is meant to test other functions...
    function assert(callback, specDescription, input, expectedOutput) {

// call the passed function and store in a result
    var result = callback(input);

// build the string for the possible fail message
    var failMessage = "%cFAILED ===== "
        + specDescription
        + ": \n\t- an input of "
        + input
        + " did not return "
        + expectedOutput
        + "\n\t- "
        + result
        + " was returned instead";


// build the string for the pass message
    var passMessage ="%cPASSED ===== " + specDescription;


// compare the expected result with the actual result and log the outcome
    if (result !== expectedOutput) {
        console.log(failMessage, "color : red");
    } else {
        console.log(passMessage, "color: green");
    }

    }


// // here is a very simple pure function to test
    function increaseNumByTwo(num) {
        return (!isNaN(num)) ? Number(num) + 2 : false;
    }

// // running the test...
assert(increaseNumByTwo, "it should increase a numeric input by two", 2, 4);


// // lets run a few more tests...
assert(increaseNumByTwo, "it should return false if any input is not numeric", "bob", false);
assert(increaseNumByTwo, "it should return 5.5 if passed 3.5", 3.5, 5.5);
assert(increaseNumByTwo, "it should return 10 if passed the string '8'", '8', 10);