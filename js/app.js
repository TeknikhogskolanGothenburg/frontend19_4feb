/*
    jQuery Selectors
    $("*")                      // All elements
    $("div")                    // All <div> elemnts
    $(".blue")                  // All elements with class blue
    $(".blue.red")              // All elements with class blue AND class red
    $(".blue,.red")             // All elements with class blue OR class red
    $("#headline")              // The (first) element with id headline
    $("[href]")                 // All elements with hred attribute
    $("[href='example.com']")   // All elements with href=example.com

    Relational Operators
    $("div span")               // All <span>s that are decedants of a <div>
    $("div > span")             // All <span>s that are a direct child of a <div>
    $("a ~ span")               // All <span>s that are siblings following an <a>
    $("a + span")               // All <span>s that are immediately after an <a>

    Other Selectors
    $("a:eq(1)")                // Selects the second <a> in the DOM
    $("a").not(":eq(1)")        // Selects all <a> but the second
    $("a:not(.exmaple)")        // Select all <a> that does not have class example
    $("#navigation *")          // All elements with the element with id navigation
*/



$(document).ready(function() {
    $(".inner").append("<p>From jQuery</p>");
    run();

    $("li").each(function (index) {
        console.log(index + ": " + $(this).text());
        
    });


    $("a").attr("title", "Click it");
    console.log($("a").attr("title"));
    

    $("#some-text").on("click", function () {
        console.log($("#some-text").text());
    });

});

function run() {
    console.log("Hej");
    
}