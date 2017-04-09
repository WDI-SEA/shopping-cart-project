var dog = {};


// these two functions toggle the subcategories when the mouse enters, or leaves the element (and child elements)
function displaySubCategories() {
    this.children[1].classList.remove("hidden");
}

function hideSubCategories() {
    this.children[1].classList.add("hidden");
}

// may need to change to toggle
function toggleItemsInCategory() {
    var category = this.id;
    var divOfItems = document.querySelector(`[data-cat=${category}`);
    var currentlyDisplayed = document.querySelector(".displayed");
    var title = document.querySelector(".title");

    if (!currentlyDisplayed) {
        divOfItems.classList.add("displayed");
        title.innerHTML = category;
    } else if (currentlyDisplayed === divOfItems) {
        currentlyDisplayed.classList.remove("displayed");
        title.innerHTML = "";
    } else {
        currentlyDisplayed.classList.remove("displayed");
        divOfItems.classList.add("displayed");
        title.innerHTML = category;
    }
}

function onLoad() {
    // variables to store the category menus
    var bodyMenu = document.getElementById("body-parts");

    //adding event listeners to display/hide subcategories
    bodyMenu.addEventListener("mouseover", displaySubCategories);
    bodyMenu.addEventListener("mouseout", hideSubCategories);

    // adds display toggle to each subcategory button
    var earsSubCatButton = document.getElementById("ears");
    earsSubCatButton.addEventListener("click", toggleItemsInCategory);
    var eyesSubCatButton = document.getElementById("eyes");
    eyesSubCatButton.addEventListener("click", toggleItemsInCategory);

}









document.addEventListener("DOMContentLoaded", onLoad);
