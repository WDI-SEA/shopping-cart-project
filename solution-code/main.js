// notes to self, tried to add localStorage, but not quite sure how to make that work...
// tested on ~lines 5 and 93. was able to store it
// but not quite sure how to retrieve and have interact with current set up.

var dog = {};
// dog = JSON.parse(localStorage.getItem("lastDog"));
var allDogPartsIds = [];


// these two functions toggle the subcategories when the mouse enters, or leaves the element (and child elements)
function displaySubCategories() {
    this.children[1].classList.remove("subcat-hidden");
}

function hideSubCategories() {
    this.children[1].classList.add("subcat-hidden");
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
// then if it hasn't been set, creates new element
// if it has been set, simply updates current list item with new text
// after all that, property is added to the dog object
function clickOnItem() {
    var dogTrait = this.id;
    var dogPart = this.dataset.cat;
    var currentCartList = document.querySelectorAll("#cart-items li");
    var newInnerText = dogTrait + " " + dogPart;

    if (!dog.hasOwnProperty(`${dogPart}`)) {
        var newDogTraitInCart = document.createElement("li");
        newDogTraitInCart.innerText = newInnerText;
        var cartDisplay = document.getElementById("cart-items");
        cartDisplay.appendChild(newDogTraitInCart);
    } else {
        for (var i = 0; i < currentCartList.length; i++) {
            if (currentCartList[i].innerText.includes(dogPart)) {
                currentCartList[i].innerText = newInnerText;
            }
        }
    }

    dog[`${dogPart}`] = dogTrait;
}

// sees if any of the body parts defined are missing from the created dog
function checkForAllDogParts(dog, dogParts) {
    var allPartsPresent = true;
    for (var i = 0; i < dogParts.length; i++) {
        if (!dog.hasOwnProperty(dogParts[i])) {
            allPartsPresent = false;
        }
    }
    return allPartsPresent;
}

// checks if you have all the parts of a dog so you can purchase it, then adds text after the cart,
// also saves dog cart to localStorage
function clickToPurchase() {
    var message = document.querySelector(".cart p");
    var cart = document.querySelector(".cart");
    var innerText = "";

    if (!checkForAllDogParts(dog, allDogPartsIds)) {
        innerText = "Your dog is missing a body part! Please review and add the right part!";
    } else {
        innerText = "Your dog has been purchased! We will send you updates about the status of your new companion!";
    }
    message.innerText = innerText;

    // localStorage.setItem("lastDog", JSON.stringify(dog));
}

function onLoad() {
    // variables to store the category menus
    var bodyMenu = document.getElementById("body-parts");

    //adding event listeners to display/hide subcategories
    bodyMenu.addEventListener("mouseover", displaySubCategories);
    bodyMenu.addEventListener("mouseout", hideSubCategories);

    // adds display toggle to each subcategory button
    var allSubcategories = document.querySelectorAll(".subcategory li");
    for (var i = 0; i < allSubcategories.length; i++) {
        allSubcategories[i].addEventListener("click", toggleItemsInCategory);
    }

    // grabs all body parts as text (using ID) for later use
    for (var i = 0; i < allSubcategories.length; i++) {
        allDogPartsIds.push(allSubcategories[i].id);
    }

    // adds "click on item" event to each dog trait available
    var allDogTraits = document.querySelectorAll("article");
    for (var i = 0; i < allDogTraits.length; i++) {
        allDogTraits[i].addEventListener("click", clickOnItem);
    }

    var submitButton = document.getElementById("buy-dog");
    submitButton.addEventListener("click", clickToPurchase);

}

document.addEventListener("DOMContentLoaded", onLoad);
