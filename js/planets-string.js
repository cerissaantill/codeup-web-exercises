(function(){
    "use strict";
//
//      var planetsString = "MercuryVenus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//      var planetsArray

//     /**
//      * TO DO:
//      * Convert planetsString to an array, and save it in a variable named
//      * planetsArray.
//      * console.log planetsArray to check your work
//      */

    var planetsString = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

   var planetsArray;



//     /**
//      * TO DO:
//      * Create a string with <br> tags between each planet. console.log() your
//      * results. Why might this be useful?
//      *
        planetsArray = planetsString.split('|');
        console.log(planetsArray);





//      * BONUS:
//      * Create another string that would display your planets in an unordered
//      * list. You will need an opening AND closing <ul> tags around the entire
//      * string, and <li> tags around each planet.
//      */

    var planetsList = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Saturn<br>Uranus<br>Neptune";
    console.log('<ul><li>' + planetsList + '</li></ul>');





})();












