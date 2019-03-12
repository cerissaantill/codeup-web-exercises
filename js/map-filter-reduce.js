
"use strict";

/**  1. Create a file named map-filter-reduce.js in your js directory and copy
 *      the users data below into it.
 */

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/** 2. Use .filter to create an array of user objects where each user object
 *       has at least 3 languages in the languages array.
 */
        const threeLanguages = users.filter(n => n.languages.length >= 3);

        console.log(threeLanguages);




/**  3. Use .map to create an array of strings where each element is a user's email address  */

        const emailAddresses = users.map(n => n.email);

        console.log(emailAddresses);




/**  4. Use reduce to get the total years of experience from the list of users.
 *      Once you get the total of years you can use the result to calculate the average.
 */
        const sumOfYears = (total, user) => total + user.yearsOfExperience;

        const totalYears = users.reduce(sumOfYears, 0);

        console.log(totalYears);






/** 5. Use reduce to get the longest email from the list of users.  */


        const findLongest = (prev, current) => {

            let myString = current.email;

            if(myString.length > prev.length){

                return myString;

            } else {

                return prev;
            }
        };


        const longestEmail = users.reduce(findLongest, '');

        console.log(longestEmail);





/** 6. Use reduce to get the list of user's names in a single string.
 *      Example: Your instructors are: ryan, luis, zach, fernando, justin.
 */
        const compileList = (list, user) => list + user.name + '';

        const listOfNames = users.reduce(compileList, 'Your instructors are: ');

        console.log(listOfNames);



/** BONUS:    {EXTRA, EXTRA CRISPY}
    Use reduce to get the unique list of languages from the list of users. */

    const listOfLanguages = (list, user) => {

        list.push(user.languages);

        return list;

    };


    console.log(listOfLanguages);

    let languages = users.reduce(listOfLanguages, []);

    languages = languages.flat();  // flattened the Array to get Strings

    languages = new Set(languages); // takes unique values and creates a list object

    languages = Array.from(languages); // turns Set back into an Array

    console.log(languages);





// .add is like .push but for Sets









