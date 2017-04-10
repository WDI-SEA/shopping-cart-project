function displayCategory() {
    var categoryName = this.getAttribute("data-category-name");
    var productGroups = document.querySelectorAll(".productGroup");
    for (var i = 0; i < productGroups.length; i++) {
        productGroups[i].className = "productGroup hidden";
    }
    var categoryToDisplay = document.getElementById(categoryName);
    categoryToDisplay.className = "productGroup products";
}

function addClickEventToCategoryButtons() {
    var categoryButtons = document.querySelectorAll(".categoryButton");
    for (var i = 0; i < categoryButtons.length; i++) {
        categoryButtons[i].addEventListener("click", displayCategory);
    }
}

function addClickEventToProductDivs() {
    var productDivs = document.querySelectorAll("#store div");
    for (var i = 0; i < productDivs.length; i++) {
        productDivs[i].addEventListener("click", addProductToList);
    }
}

function addProductToList() {
    var productName = this.getAttribute("data-name");
    var newListItem = document.createElement("li");
    newListItem.innerHTML = productName;
    var shoppingList = document.getElementById("shoppingList");
    shoppingList.appendChild(newListItem);
}

document.addEventListener("DOMContentLoaded", function() {
    addClickEventToCategoryButtons();
    addClickEventToProductDivs();
});
