function displayCategory(categoryName) {
    var cerealNav = document.getElementById("cereal");
    cerealNav.className = "hidden";
    var juiceNav = document.getElementById("juice");
    juiceNav.className = "hidden";
    var candyNav = document.getElementById("candy");
    candyNav.className = "hidden";
    if (categoryName == "cereal") {
        cerealNav.className = "products";
    } else if (categoryName == "juice") {
        juiceNav.className = "products";
    } else {
        candyNav.className = "products";
    }
}

function displayCereal() {
    displayCategory("cereal");
}

function displayJuice() {
    displayCategory("juice");
}

function displayCandy() {
    displayCategory("candy");
}

function addClickEventToCategoryButtons() {
    var cerealButton = document.getElementById("cerealButton");
    cerealButton.addEventListener("click", displayCereal);
    var juiceButton = document.getElementById("juiceButton");
    juiceButton.addEventListener("click", displayJuice);
    var candyButton = document.getElementById("candyButton");
    candyButton.addEventListener("click", displayCandy);
}

function addClickEventToProductDivs() {
    var productDivs = document.querySelectorAll("#store div");
    for (i = 0; i < productDivs.length; i++) {
        console.log(productDivs[i]);
        productDivs[i].addEventListener("click", addProductToList);
    }
}

function addProductToList() {
    var productName = this.getAttribute("data-name");
    // Get the "shoppingList"
    var shoppingList = document.getElementById("shoppingList");
    // create the added element
    var newListItem = document.createElement("li");
    // set the new list item to contain the productName
    newListItem.innerHTML = productName;
    // append the child to the shopping list
    shoppingList.appendChild(newListItem);
}
document.addEventListener("DOMContentLoaded", function() {
    addClickEventToCategoryButtons();
    addClickEventToProductDivs();
});
