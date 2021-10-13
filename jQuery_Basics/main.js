$(function(){

    // alert("Jquery was connected");

    $('#python_logo').click(function(){
        $('#nav-bar').toggle();
    });

    $('.option').hover(function(){
        $(this).css("color", "black");},
            function(){
            $(this).css("color", "white");
    });

    $('#side-bars').click(function(){
        $('.links').slideToggle();
    });

    //getters and setters 
    var romeo = $('.first').text();
    alert(romeo);

    $('.bullet').click(function(){
        $('.test').text('Examples of things you can do');
    });
});