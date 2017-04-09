document.addEventListener("DOMContentLoaded", function() {
    // is "DOMContentLoaded" an updated "document.onload"?
    //document.onload = function () {myScript}

    //document.createElement to add items to UL shoppinglist.

    // var cereal = ['cheerios', 'crunch', 'fruit-loops', 'puffs', 'raisin-bran']
    // var juice = ['apple-juice', 'carrot-juice', 'grape-juice', 'orange-juice', 'tomato-juice']
    // var candy = ['kit-kat', 'm&ms', 'skittles', 'snickers', 'twix']

    // var products = ['cereal', 'juice', 'candy']

    //var cereal = getItemById
    // var element = document.
    // element.addEventListener('nameOfEvent', functionToRun);


    var lis = document.querySelectorAll("#category-nav li");
    lis.addEventListener("click", function() {
        console.log("click")
        console.log(this.innerText)
        var HiddenElement = document.hidden;
        for (i = 0; i <= lis.length; i++);
        lis.classList.hidden("")
    });

    //change .hidden for #cereal-products, #candy-products, #juice-products) on click.
    //default cereal, candy.hidden, juice.hidden
    //function, when candy clicked: cereal.hidden(change display), candy(change display), juice.hidden
    //function, when juice clicked: cereal.hidden(change display), candy.hidden, juice(change display)



    //function to append .item  on click shoppingcart.ul> on 'click' --- add the eventListener to all div with class item, so the entire div is the target
    //could div item be pushed from an array rather than divs?  (e.g. arrayToList)



    var divItemToShoppingcart = document.querySelector(".item");
    divItemToShoppingcart.addEventListener("click", function() {
        console.log("Item click.");
        var shoppingcartLi = document.createElement("li");
        shoppingcartLi.innerText = (this.item) //or this.divItemToShoppingcart

        var shoppingcartUl = document.getElementById("shoppingcart-ul");
        shoppingcartUl.appendChild(shoppingcartLi);
    });

    // var itemDiv = document.getElementsByClass(".item");
    // itemDiv[i].addEventListener("click", function() {
    //         console.log("This itemDivs click.");
    //         for (i = 0; i <= lis.length; i++);
    //         var shoppingcartLi = document.createElement("li");
    //         shoppingcartLi.setAttribute("id", "#shoppingcart-li");
    //         shoppingcartLi.innerText = "this.shoppingcartLi";
    //         var shoppingcartUl = document.getElementById("shoppingcart-ul");
    //         shoppingcartUl.appendChild(this.shoppingcartLi);

    //         var shoppingcartUl = document.querySelectorAll(".shoppingcart-ul");
    //         var shoppingcartLi = document.createElement("#shoppingcart-li");

    //         shoppingcartLi[i].onclick = function() {
    //             for (i = 0; i <= shoppingcartLi.length; i++);
    //             this.remove();

    //         });






})

//addEventListen 2px border around each div .item on mouseover

// function displayItemBorder() {
//     document.querySelector('.item').style.border = 'blue';
// }

// function hideItemBorder() {
//     document.querySelector('.item').style.border = 'grey';
// }
// var div = document.querySelector('div');
// div.addEventListener('mouseover', displayItemBorder);
// div.addEventListener('mouseout', hideItemBorder);



















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



// UPPERCASE
// console.log(_____ toUpperCase);


//SHOPPINGCART**********************************************

// TOTAL
// var subtotals = [1, 2, 3, POPULATE ARRAY WITH PRICE * QUANTITY];
// var sum = subtotals.reduce(function(a, b) { return a + b; });
// console.log("TOTAL = " + sum);





//remove items from shoppingcart ul: http://stackoverflow.com/questions/14418451/click-event-on-dynamically-generated-list-items-using-jquery


// ENQUIRY FORM *********************************************

// var emailInputField = document.getElementById('email');
// emailInputField.addEventListener('blur', checkEmailInput);
// function checkEmailInput () {
//  if (emailInputField.value.length === 0) {
//      document.getElementById('message').innerText = 'Please enter an email address.'
//      emailInputField.className = 'error';    
//  } else {
//      document.getElementById('message').innerText = '';
//      emailInputField.className = '';
//  }
// }


//EVENT BUTTON CREATES CLICK DATA *******************
//div id="button">click me</div>
// var btn = document.getElementById('button')
// btn.addEventListener("click", function(event) {
//     console.log(this)
// })
