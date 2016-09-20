/* Document Ready */
$(function() {
    // Modify the paragraph.
    $("#myParagraph").attr("style", "color: blue;");
    $("#myParagraph").css("color", "blue"); // better way

    // for those of you that chose .css() route, that's better!
    // Select all H3 tags and modify them in some way.
    $("h3").attr("style", "font-size: 50pt;");

    // Select the first item in the list and modify it
    // in some way.
    $("#listOfItems li").first().attr("style", "color: green;");
    // or
    $("#listOfItems li").first().css("color", "green;");
    // or, written another, possibly more readable way:
    $("#listOfItems li")
        .first()
        .css({ // <-- note the object to set multiple values!
            "color": "green;",
            "font-size": "4pt"
        });

});
