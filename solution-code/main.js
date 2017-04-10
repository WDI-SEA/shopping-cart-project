//add search

var cerealButton = document.getElementById('cerealButton');
var juiceButton = document.getElementById('juiceButton');
var candyButton = document.getElementById('candyButton');
var cereals = document.getElementsByClassName('Cereal')[0];
var juices = document.getElementsByClassName('Juices')[0];
var candies = document.getElementsByClassName('Candy')[0];
var clearButton = document.getElementById('clear');
var searchBar = document.getElementsByClassName('search')[0];


var categories = [{
    button: candyButton,
    category: candies
}, {
    button: juiceButton,
    category: juices
}, {
    button: cerealButton,
    category: cereals
}];



var cartTotal = 0;

function changeCategory() {
    for (i = 0; i < categories.length; i++) {
        if (categories[i]['button'] === this) {
            // console.log(this.getAttribute('id') + 'clicked');
            categories[i]['category'].classList.add("active");
            this.style.backgroundColor = 'grey';
            categories[i]['category'].classList.remove("hidden");
            // console.log(categories[i]['category'].classList)
        } else {
            categories[i]['category'].classList.add("hidden");
            categories[i]['category'].classList.remove("active");
            categories[i]['button'].style.backgroundColor = '#3b4659';
        }
    }

}

var counter = {};

function printCart() {
    cartList.innerHTML = "";
    for (var item in counter) {
        var newLi = document.createElement('li');
        if (counter[item] == 1) {
            newLi.innerHTML = item.toUpperCase();
        } else {
            newLi.innerHTML = item.toUpperCase() + " x" + counter[item];
        }
        document.getElementById('cartList').appendChild(newLi)

    }
};


function addToCart(item) {
    var itemName = item.getAttribute('data-name');
    if (counter[itemName] === undefined) {
        counter[itemName] = 1;
    } else {
        counter[itemName] += 1;

    }
    printCart()
}


function addToTotal() {
    cartTotal += parseFloat(this.getAttribute('data-price'));
    document.getElementById('total').innerHTML = "Total: $" + cartTotal;
    addToCart(this);
};

function clearCart() {
    var cartList = document.getElementById('cartList');
    cartList.innerHTML = "";
    document.getElementById('total').innerHTML = "Total:";
    counter = {};
    cartTotal = 0;

}

function search() {
    var input = searchBar.value.toLowerCase();
    var product = $('.product');
    product.addClass('hidden');
    console.log(product.eq(1).data("name"));
    if (input == "") {
        product.removeClass('hidden');
    } else {
        for (i = 0; i < product.length; i++) {
            // product.eq(i).toggleClass('hidden', product.eq(i).data("name") != input);
            product.eq(i).toggleClass('hidden', !product.eq(i).data("name").includes(input));
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    cerealButton.addEventListener('click', changeCategory);
    juiceButton.addEventListener('click', changeCategory);
    candyButton.addEventListener('click', changeCategory);
    $('.product').on('click', addToTotal);
    clear.addEventListener('click', clearCart);
    searchBar.addEventListener('keyup', search);
});
