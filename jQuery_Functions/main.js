$(function(){

    // alert('Jquery is running');


    //adding a class to a function
        $(".buttonHere").click(function(){
            $(".addClass").addClass("changeColor");
        });

    //using the slide Toggle
    $(".buttonHere2").click(function(){
        $(".imgTag").slideToggle(); 
    });

    //using the hide() method
    $(".hideButton").click(function(){
        $(".imgTag").hide();
    });

    //using the show() method after the image is hidden
    $(".showButton").click(function(){
        $(".imgTag").show("slow");
    });

    //using the toggle() method
    $(".toggleButton").click(function(){
        $(".imgTag2").toggle();
    });

    //using the slideDown() method
    $(".slideDownButton").click(function(){
        $(".imgTag2").slideDown(); 
    });

    //using the slideUp() method
    $(".slideUpButton").click(function(){
        $(".imgTag2").slideUp(); 
    });

    //using the fadeIn() method
    $(".fadeInButton").click(function(){
        $(".imgTag2").fadeIn(); 
    });

    //using the fadeOut() method
    $(".fadeOutButton").click(function(){
        $(".imgTag2").fadeOut(); 
    });

    //using the before() method
    $(".imgTag").before("<p>This is a picture of the greatest soccer manager in the world</p>");

    //using the after() method
    $(".imgTag2").after("<p>No one compares to this GOAT</p>");

    //using the append() method
    $(".addClass").append("<p>I tested out the append method</p>");

    //using the html() method(gets the first element and set it)
    // var usingHtml = $(".slideUpButton").html();
    // $(".testButton").html(usingHtml);

    //using the attr() method
     $(".testButton").click(function(){ 
        $(".headingHere2").attr("class", "changeColor");
    });

    
     
});