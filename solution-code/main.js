var dog = {};


// these two functions toggle the subcategories when the mouse enters, or leaves the element (and child elements)
function displaySubCategories() {
    this.children[1].classList.remove("hidden");
}

function hideSubCategories() {
    this.children[1].classList.add("hidden");
}

// grabs id of currently clicked menu category to grab corresponding collection of items
// then checks if something is currently displayed
// if not, simply display current category
// if there is, if it is the same as what is just clicked, remove everything
//if it is different, turn the display of that off and enable display of new div
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

// determines which category of items you clicked on and which trait you clicked on
// then adds it to the dog object (if it hasn't been set)
// if it has been set, simply updates

function clickOnItem() {
    var dogTrait = this.id;
    var dogPart = this.dataset.cat;
    dog[`${dogPart}`] = dogTrait;
}

//access text to add to cart with .lastElementChild.innerText (event handler on article)


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
    var headsSubCatButton = document.getElementById("heads");
    headsSubCatButton.addEventListener("click", toggleItemsInCategory);
    var bodiesSubCatButton = document.getElementById("bodies");
    bodiesSubCatButton.addEventListener("click", toggleItemsInCategory);
    var furSubCatButton = document.getElementById("fur");
    furSubCatButton.addEventListener("click", toggleItemsInCategory);
    var tailSubCatButton = document.getElementById("tail");
    tailSubCatButton.addEventListener("click", toggleItemsInCategory);

    // adds "click on item" event to each dog trait available
    // i should have made the above a for loop too
    var allDogTraits = document.querySelectorAll("article");

    for (var i = 0; i < allDogTraits.length; i++) {
        allDogTraits[i].addEventListener("click", clickOnItem);
    }



}









document.addEventListener("DOMContentLoaded", onLoad);
