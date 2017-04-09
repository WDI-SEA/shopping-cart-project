// MVP-click events for categories,display html products and hide other divs using add/remove class,doument load
// Ideal- generate products directly.
var flora = document.getElementById('flora');
var fauna = document.getElementById('fauna');
var insecta = document.getElementById('insecta');
var cart = document.getElementById('cart');
var catFlora = document.getElementById('category-flora');
var catFauna = document.getElementById('category-fauna');
var catInsecta = document.getElementById('category-insecta');


function addToCart(item) {
    var addItem = item;
    var newItem = document.createElement('li');
    newItem.innerText = (addItem);
    cart.appendChild(newItem);
}

flora.addEventListener('click', function() {
    addToCart();
})

fauna.addEventListener('click', function() {
    addToCart();
})

insecta.addEventListener('click', function() {
    addToCart();
})

catFlora.addEventListener('click', function() {
    changeCat(flora);
})

catFauna.addEventListener('click', function() {
    changeCat(fauna);
})

catInsecta.addEventListener('click', function() {
    changeCat(insecta);
})

function changeCat(category) {
    var active = category
    if (active == flora) {
        flora.classList.remove('hidden');
        fauna.classList.add('hidden');
        insecta.classList.add('hidden');
    } else if (active == fauna) {
        fauna.classList.remove('hidden');
        flora.classList.add('hidden');
        insecta.classList.add('hidden');
    } else if (active == insecta) {
        insecta.classList.remove('hidden');
        fauna.classList.add('hidden');
        flora.classList.add('hidden');
    }
}
