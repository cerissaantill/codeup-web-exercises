(function(){
    "use strict";


    //Returns the first <li> item in our HTML
    var listItem = document.getElementsByTagName('li')[0];

    //displays innerText of our first <li>
    var listItemClick = function(event){
        console.log(listItem.innerText);
    };

    //logs innerText of first <li> item every time it is clicked
    listItem.addEventListener('click',listItemClick, false);

    //target buttons inside of our paragraph
    var button1 = document.getElementById('one');
    var button2 = document.getElementById('two');


    // var paragraph = document.getElementById('sub');
    // var span = document.getElementById('word');

    //function to be used for button1
    var buttonClick = function(event){
        alert("You clicked the button!");
    };

    //function to be used on button2
    //clicking button2 should remove listener on button1
    var removeButtonOne = function(event){
        button1.removeEventListener('click',buttonClick,false);
        alert('You removed the listener from Button 1');
    };

    // var paragraphClick = function(e){
    //     alert("You clicked the paragraph!");
    // };

    // var spanClick = function(e){
    //     alert("You clicked the span!");
    // };

    button1.addEventListener('click', buttonClick, false);
    button2.addEventListener('click', removeButtonOne, false);

    // paragraph.addEventListener('click', paragraphClick, false);
    // span.addEventListener('click', spanClick, false);
})();