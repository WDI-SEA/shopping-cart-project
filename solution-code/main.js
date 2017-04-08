document.addEventListener("DOMContentLoaded", function() {

    //document.createElement to add items to UL shoppinglist.

    // var cereal = ['cheerios', 'crunch', 'fruit-loops', 'puffs', 'raisin-bran']
    // var juice = ['apple-juice', 'carrot-juice', 'grape-juice', 'orange-juice', 'tomato-juice']
    // var candy = ['kit-kat', 'm&ms', 'skittles', 'snickers', 'twix']

    // var products = ['cereal', 'juice', 'candy']

    //var cereal = getItemById

    var lis = document.querySelectorAll("#category-nav li");
    lis[0].addEventListener("click", function() {
        console.log("click")
        console.log(this.innerText)
    });

    //for ()
});
//object.addEventListener("click", script)




//div id="button">click me</div>
// var btn = document.getElementById('button')
// btn.addEventListener(click ', function(event) {
//     console.log(this)
// })



//remove items from shoppingcart ul: http://stackoverflow.com/questions/14418451/click-event-on-dynamically-generated-list-items-using-jquery
