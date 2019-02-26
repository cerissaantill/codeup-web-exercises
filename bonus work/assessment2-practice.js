

// ------------- PRACTICE 1
// Write a function, filterNumbers() that takes in an array of mixed data types
// and returns an array of only the numbers type in ascending order.
//     Example input: ["fred", true, 5, 3]
//      Example output: [3, 5]


// my notes : target the number types and return them in ascending order

    var mixedDataTypes = [
        {
            movieName: "Thoroughly Modern Millie",
            movieRanking: 95,
            hasWatched: true
        },
        {
            movieName: "Bridesmaids",
            movieRanking: 89,
            hasWatched: true
        },
        {
            movieName: "Moana",
            movieRanking: 100,
            hasWatched: true
        }
    ];


    function filterNumbers(input) {
        var output = [];
        console.log(mixedDataTypes.sort());
    }




// ------------- PRACTICE 2 -----------------
// Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.

    function getOlder(input) {
        var output = [];
        for (var i=0; i<input.length; i += 1) {
            console.log(input[i].age);
        }
        return output;
    }

    var dogs = [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastiff",
            age: 10
        }
    ];


// ------------- PRACTICE 3 -----------------
// Write a function, washCars() that takes in a array of car objects and
// sets the boolean properties of isDirty to false

// pseudo code : target the isDirty properties in the array of objects and return false for all.

    var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

function washCars(input) {
    var output = [];
    for (var i=0; i<input.length; i = false) {
        console.log(input[i].isDirty);
    }
    return output;
}

// Example output:
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: false // changed to false
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]






// ------------- PRACTICE 4 -----------------
// Write a function, adminList() that takes in an array of user objects and
// returns a count of all admins based on the isAdmin property. Refactor to return
// an array of admin-only user emails. Refactor again to return an array of user
// objects that are admins.
    var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];
// Example Output (before refactor): 2
// Example Output (after 1st refactor): [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor): [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]

function adminList() {
    var admin = [];
    var trueAdmins = [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].isAdmin) {
            // admin.unshift("true");
            admin.push(users[i].email);  //store in admin[]
            trueAdmins.push(users[i]);  //store in trueAdmins[]
        }
    }
    console.log(admin);
    console.log(trueAdmins);
}
adminList();






// ------------- PRACTICE 5 -----------------
// Create a function, makeSandwichObjects() that takes in two array of strings, breads
// and fillings and returns an array of sandwichObjects that contain properties for
// bread and filling and values correspond to the same order of the two passed in arrays.
// Assume the two array inputs are the same length.
//     Example Input:
//     var breads  = [
//         "white",
//         "wheat",
//         "rye",
//         "white"
//     ];
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
// makeSandwichObjects(breads, fillings) // example call to the function
// Example Output: [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rye",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]
