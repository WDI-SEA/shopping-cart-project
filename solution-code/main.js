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
    $("p").on("click", function() {
        var listItem = $(this).html();
        $("#cart").append(listItem);
    });




});
//end

// $(function() {
// });
