document.addEventListener("DOMContentLoaded", function() {

    //document.createElement to add items to UL shoppinglist.

    // var cereal = ['cheerios', 'crunch', 'fruit-loops', 'puffs', 'raisin-bran']
    // var juice = ['apple-juice', 'carrot-juice', 'grape-juice', 'orange-juice', 'tomato-juice']
    // var candy = ['kit-kat', 'm&ms', 'skittles', 'snickers', 'twix']

    // var products = ['cereal', 'juice', 'candy']

    //var cereal = getItemById
    // var element = document.
    // element.addEventListener('nameOfEvent', functionToRun);


    var lis = document.querySelectorAll("#category-nav li");
    lis[2].addEventListener("click", function() {
        console.log("click")
        console.log(this.innerText)
    });

    //for ()
});














//object.addEventListener("click", script)**********************


//ADD EVENT LISTENER ON MOUSE OVER FOR ITEM DETAILS******************************
// function displayItemDetails() {
//     document.querySelector('body').style.backgroundColor = 'blue';
// }
// function hideItemDetails() {
//     document.querySelector('body').style.backgroundColor = 'white';
// }
// var div = document.querySelector('div');
// div.addEventListener('mouseover', displayItemDetails);
// div.addEventListener('mouseout', hideItemDetails);






//SHOPPINGCART**********************************************

// TOTAL
// var numbers = [1, 2, 3, POPULATE ARRAY WITH PRICE * QUANTITY];
// var sum = numbers.reduce(function(a, b) { return a + b; });
// console.log("TOTAL = " + sum);





//remove items from shoppingcart ul: http://stackoverflow.com/questions/14418451/click-event-on-dynamically-generated-list-items-using-jquery


// ENQUIRY FORM *********************************************

// var emailInputField = document.getElementById('email');
// emailInputField.addEventListener('blur', checkEmailInput);
// function checkEmailInput () {
// 	if (emailInputField.value.length === 0) {
// 		document.getElementById('message').innerText = 'Please enter an email address.'
// 		emailInputField.className = 'error';	
// 	} else {
// 		document.getElementById('message').innerText = '';
// 		emailInputField.className = '';
// 	}
// }


//EVENT BUTTON CREATES CLICK DATA *******************
//div id="button">click me</div>
// var btn = document.getElementById('button')
// btn.addEventListener("click", function(event) {
//     console.log(this)
// })
