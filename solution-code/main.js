document.addEventListener('DOMContentLoaded', function() {

    // $("body").css("backgroundColor", "blue");

    //menu content
    $("#cerOpt").on("click", function() {

        $(".cerCategory").slideDown();
        $("#cerealCat").addClass("active");
        $("#cerealCat").removeClass("hidden");

        if ($("#juiceCat").hasClass("active")) {
            $("#juiceCat").removeClass("active");
            $("#juiceCat").hide();
        } else if ($("#candyCat").hasClass("active")) {
            $("#candyCat").removeClass("active");
            $("#candyCat").hide();
        }

    });

    $("#juOpt").on("click", function() {
        $(".juiceCategory").slideDown();
        $("#juiceCat").removeClass("hidden");
        $("#juiceCat").addClass("active");


        if ($("#cerealCat").hasClass("active")) {
            $("#cerealCat").removeClass("active");
            $("#cerealCat").hide();
        } else if ($("#candyCat").hasClass("active")) {
            $("#candyCat").removeClass("active");
            $("#candyCat").hide();
        }
    });

    $("#caOpt").on("click", function() {
        $(".candyCategory").slideDown();
        $("#candyCat").removeClass("hidden");
        $("#candyCat").addClass("active");

        if ($("#cerealCat").hasClass("active")) {
            $("#cerealCat").removeClass("active");
            $("#cerealCat").hide();
        } else if ($("#juiceCat").hasClass("active")) {
            $("#juiceCat").removeClass("active");
            $("#juiceCat").hide();
        }
    });
    ///clearly need make a function that does all of this mess when called instead

    //append item to shopping cart

    $(".box").on("click", function() {

        $("#shopBox").append($(this));
        console.log("shop");
    });


});
