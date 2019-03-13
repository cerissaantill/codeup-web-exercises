



// PROMISES - example from curriculum used during lecture...(expanded upon)



const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let number = Math.random();

        console.log(`Our number is ${number}`);

        if (number < 0.5) {
            resolve(`Our number is ${number}`);

        } else {
            reject(`Our number is ${number}`);
        }

    }, 1000);
})


    .then((data) => console.log(`resolved! ${data}`))


    .catch((data) => console.log(`rejected! ${data}`));





// setTimeout(() => {
//
//     console.log(myPromise);
//
//     }, 2000);



// =======================================

//  FETCH


fetch('https://api.github.com/users/cerissaantill')
    .then( (data) => {
        let info = data.json();
        console.log(data.login)
    })
    .catch(error => console.error(error));


































