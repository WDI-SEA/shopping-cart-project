// MVP-click events for categories,display html products and hide other divs using add/remove class,doument load
// Ideal- generate products directly.
var flora = document.getElementById('flora');
var fauna = document.getElementById('fauna');
var insecta = document.getElementById('insecta');
var cart = document.getElementById('cart');
var catFlora = document.getElementById('category-flora');
var catFauna = document.getElementById('category-fauna');
var catInsecta = document.getElementById('category-insecta');


function addToCart() {
    var newItem = document.createElement('li');
    newItem.innerText = ('item')
    cart.appendChild(newItem);
}

flora.addEventListener('click', function() {
    addToCart();
})

catFlora.addEventListener('click', function() {
    console.log('clicked!');
    flora.classList.remove('hidden');
    fauna.classList.add('hidden');
    insecta.classList.add('hidden');
})

catFauna.addEventListener('click', function() {
    console.log('clicked!');
    fauna.classList.remove('hidden');
    flora.classList.add('hidden');
    insecta.classList.add('hidden');
})

catInsecta.addEventListener('click', function() {
    console.log('clicked!');
    insecta.classList.remove('hidden');
    fauna.classList.add('hidden');
    flora.classList.add('hidden');
})
