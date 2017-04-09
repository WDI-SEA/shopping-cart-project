// MVP-click events for categories,display html products and hide other divs using add/remove class,doument load
// var flora = document.getElementById('flora');
// var fauna = document.getElementById('fauna');
// var insecta = document.getElementById('insecta');
var cart = document.getElementById('cart');
// var catFlora = document.getElementById('category-flora');
// var catFauna = document.getElementById('category-fauna');
// var catInsecta = document.getElementById('category-insecta');
var productList = document.querySelectorAll('.products');
var categoryList = document.querySelectorAll('.category');
var categoryNav = document.querySelectorAll('.cat-nav');

for (var i = 0; i < productList.length; i++) {
    productList[i].addEventListener('click', addToCart);
}

for (var i = 0; i < categoryNav.length; i++) {
    categoryNav[i].addEventListener('click', changeCat);
}


function addToCart() {
    // var addItem = item;
    var newItem = document.createElement('li');
    newItem.innerText = (this.id);
    cart.appendChild(newItem);
    newItem.addEventListener('click', removeFromCart)
}

function removeFromCart() {
    this.classList.add('hidden');
}



function changeCat() {
    var referral = this;
    for (var i = 0; i < categoryList.length; i++) {
        categoryList[i].classList.add('hidden');
        console.log(this.id);
        // now to unhide the active one
    }
}
