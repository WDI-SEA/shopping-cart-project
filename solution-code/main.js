//done - nav items class = hidden
//done - listen for click -- remove hidden & also reassign hidden to the other 2 - 3 diff cases
//??: when I added CSS lines 12-18 it de-activates my listen events in JS below. Weird!
//to do: listen for click text -- put that text in shopping cart

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cerealButt").addEventListener("click", function() {
        document.getElementById("cerealId").classList.remove("hidden");
        document.getElementById("literatureId").classList.add("hidden");
        document.getElementById("soupId").classList.add("hidden");
    });
    //
    document.getElementById("litButt").addEventListener("click", function() {
        document.getElementById("literatureId").classList.remove("hidden");
        document.getElementById("cerealId").classList.add("hidden");
        document.getElementById("soupId").classList.add("hidden");
    });
    //
    document.getElementById("soupButt").addEventListener("click", function() {
        document.getElementById("soupId").classList.remove("hidden");
        document.getElementById("literatureId").classList.add("hidden");
        document.getElementById("cerealId").classList.add("hidden");
    });
});
