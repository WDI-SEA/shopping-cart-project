// MVP-click events for categories,display html products and hide other divs using add/remove class,doument load

var cart = document.getElementById('cart');

var productList = document.querySelectorAll('.products');
var categoryList = document.querySelectorAll('.category');
var categoryNav = document.querySelectorAll('.cat-nav');

function onLoad() {
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
        var referral = this.getAttribute('data-category');
        console.log(referral);
        for (var i = 0; i < categoryList.length; i++) {
            categoryList[i].classList.add('hidden');
        }
        document.getElementById(referral).classList.remove('hidden');
    }

}
document.addEventListener("DOMContentLoaded", onLoad);
