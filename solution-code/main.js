document.addEventListener("DOMContentLoaded", function() {
    var groceryToBeMove = document.getElementById("candylist");
    var shoppingToBeMove = document.getElementById("shoppinglist");

    var onClickGrocery;
    var onClickShopping = function() {
        groceryToBeMove.appendChild(this);
        this.onClick = groceryToBeMove;
        return false;
    };
    onClickGrocery = function() {
        shoppingToBeMove.appendChild(this);
        this.onClick = onClickShopping;
        return false;
    };

    for (var i = 0; i < groceryToBeMove.getElementsByTagName("li").length; i++)
        groceryToBeMove.getElementsByTagName("li")[i].onclick = onClickGrocery;


    for (var i = 0; i < shoppingToBeMove.getElementsByTagName("li").length; i++)
        shoppingToBeMove.getElementsByTagName("li")[i].onclick = onClickShopping;

    var groceryToBeMove = document.getElementById("juicelist");
    var shoppingToBeMove = document.getElementById("shoppinglist");

    var onClickGrocery;
    var onClickShopping = function() {
        groceryToBeMove.appendChild(this);
        this.onClick = groceryToBeMove;
        return false;
    };
    onClickGrocery = function() {
        shoppingToBeMove.appendChild(this);
        this.onClick = onClickShopping;
        return false;
    };

    for (var i = 0; i < groceryToBeMove.getElementsByTagName("li").length; i++)
        groceryToBeMove.getElementsByTagName("li")[i].onclick = onClickGrocery;


    for (var i = 0; i < shoppingToBeMove.getElementsByTagName("li").length; i++)
        shoppingToBeMove.getElementsByTagName("li")[i].onclick = onClickShopping;



    var groceryToBeMove = document.getElementById("cereallist");
    var shoppingToBeMove = document.getElementById("shoppinglist");

    var onClickGrocery;
    var onClickShopping = function() {
        groceryToBeMove.appendChild(this);
        this.onClick = groceryToBeMove;
        return false;
    };
    onClickGrocery = function() {
        shoppingToBeMove.appendChild(this);
        this.onClick = onClickShopping;
        return false;
    };

    for (var i = 0; i < groceryToBeMove.getElementsByTagName("li").length; i++)
        groceryToBeMove.getElementsByTagName("li")[i].onclick = onClickGrocery;


    for (var i = 0; i < shoppingToBeMove.getElementsByTagName("li").length; i++)
        shoppingToBeMove.getElementsByTagName("li")[i].onclick = onClickShopping;

})
