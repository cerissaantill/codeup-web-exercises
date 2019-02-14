// ====================ARRAYS=====================-
//   6.	Write a function that returns the sum of an array of numbers
//   7.	Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//          1) add a student
//          2) delete a student
//          3) view all students in alphabetical order
//          4) view all students in reverse alphabetical

// 6.
        var numbers = [1, 2, 3, 4, 5, 6, 7]
        function sum(numbers) {
            return numbers.reduce(function(a,b) {
                return a + b;
            });
        }





// 7.