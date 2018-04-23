$(document).ready(function(){
    
    var theme = { "Select theme here" : "royalblue","Red" : "#ff8080","Orange":"#ff8533","Blue":"#668cff",
    "Pitch-Black":"#2d2d86" } ;
    $("#right-nav-div1").hide();

    $.each(theme, function(key, value) {
       $("#theme-selector").append('<option value ='+value+'>'+key+'</option>');
    });

    $("#theme-selector").change(function() {
        $(".header").css("background-color",$("#theme-selector").val());
    });

    $("#hideRightNav").click(function(e) {
        $("#right-nav-div").hide(1000);
        $("#right-nav-div1").show(1000);
    });

    $("#showRightNav").click(function(e) {
        $("#right-nav-div").show(1000);
        $("#right-nav-div1").hide(1000);
    });

    $("html").on("dragover", function(event) {
        event.preventDefault();  
        event.stopPropagation();
    });

    $("html").on("drop", function(event) {
        $("#right-nav-div1").css("left",event.pageX);
        $("#right-nav-div1").css("top",event.pageY);
    })
});