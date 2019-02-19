(function() {
    "use strict";

// // Linked to math-js.html



    // create a circle object

    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var area = Math.PI * Math.pow(this.radius, 2);
            return area;       // TODO: return the proper value
        },





        // If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value
        // console.log("Area of a circle with radius: " + this.radius + ", is: ");

        logInfo: function (doRounding) {
            // TODO: complete this method.

            if(doRounding){
                return 'Area of a circle with radius: ' + this.radius + ', is ' + Math.round(this.getArea);
            }else {
                return 'Area of a circle with radius: ' + this.radius + ', is: ' + this.getArea();
                 }
            }
        };



    //         if (doRounding === true) {
    //             console.log(Math.round(circle.getArea()));
    //         }else{
    //             console.log(circle.getArea());
    //         }
    //     }




    // log info about the circle

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    console.log("=======================================================");



    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;



    // log info about the circle, no work necessary below
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();