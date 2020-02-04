$(() => {
    $("#btn-animate").click(() => {
        console.log($("#box1").width());
        
        if($("#box1").width() < 150) {
            $("#box1").animate( 
                {
                    width: "200px",
                    height: "200px"
                },
                {
                    duration: 3000,
                    specialEasing: {
                        width: "linear",
                        height: "linear"
                      },
                    complete: function() {
                        $(this).css("background-color", "red");
                    }
                }
            );
        }
        else {
            console.log("hej");
            
            $("#box1").animate( 
                {
                    width: "100px",
                    height: "100px"
                },
                {
                    duration: 3000
                }
            );
}
    });
});