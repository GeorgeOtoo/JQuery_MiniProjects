$(function () {

    //loads the pokemon images
    for (var i = 1; i < 21; i++) {
        var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/"; 
        $.get(url, function(data){
            $('#avatarIcons').append("<img src='" + data.sprites.front_default + "' id='" + data.id + "'>");
        }, "json");
    }

    //click to display info
    $('#avatarIcons').on('click', 'img', function(){
        var htmlContents = "";
        var iconNum = $(this).attr("id"); 
        var urlLink = "https://pokeapi.co/api/v2/pokemon/" + iconNum + "/";
        console.log("image " +iconNum + " was clicked");
        $.get(urlLink, function(data){
            htmlContents += "<h2>" + data.species.name + "</h2>";
            htmlContents += '<img src=' + data.sprites.front_shiny + '>';
            htmlContents += "<h4>Types</h4>";
            htmlContents += "<ul>";
            for(var i = 0; i<data.types.length; i++){
                htmlContents += "<li>" + data.types[i].type.name + "</li>";
            }
            htmlContents +=  "</ul>";
            htmlContents += "<h4>Height</h4>";
            htmlContents += "<p> " + data.height + " </p>";
            htmlContents += "<h4>Weight</h4>";
            htmlContents += "<p> " + data.weight + " </p>";
            $("#pokemonInfo").append(htmlContents);
        }, 'json');
        
    });

    //$.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){

    // var html_content = "";
    // for (var i = 1; i < 21; i++) {
    //     //     html_content += '<img src="' + data.sprites.front_shiny + '">';
    //     html_content += '<img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png">';
    // }
    // $('#avatarIcons').html(html_content);
    
    // $('img').click(function(){

    //     //display the name
    //     // $.get('https://pokeapi.co/api/v2/pokemon', function(res){


    //     // });
    //     var imageURL = $('img').attr('id'); 
    //     console.log(imageURL);
    // });


    // for (var i = 1; i <= 20; i++) {
    //     console.log(i);
    //     var url = "https://pokeapi.co/api/v2/pokemon/" + i + "/";
    //     $.get(url, function(res) {
    //         console.log("res", res);
    //         console.log("id", res.id);
    //         $('#avatarIcons').append("<img src='" + res.sprites.front_default + "' id='" + res.id + "'>");
    //     }, "json");
    // }
});