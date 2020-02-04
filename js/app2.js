$(() => {
    $(".content").append('<h1 class="what">This is fun!</h1>');
    colors = ["red", "green", "blue", "purple", "pink", "orange", "brown"];

    let colorIndex = 0;
    setInterval(() => {
        let text = $(".what");
        text.css("color", colors[colorIndex % colors.length]);
        colorIndex++;
        //text.toggle();
    }, 500);

    $("#btn-toggle").click(() => {
        $(".content").toggle();
    });

    
    $("li").filter(":even").css("background-color", "blue");
    $("li").filter(":odd").css("background-color", "green");
    $("li").filter(":first").css("font-size", "48px");
});