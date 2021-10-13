$(document).ready(function() {
    $('form').submit(function() {
        var apiInfo = "&&appid=9d319b8306256c7864bedb466c169b82&units=imperial";
        var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
        var userInfo = $('#city').val(); 
        weatherUrl += userInfo; 
        weatherUrl += apiInfo; 
        var info = "";
        // your code here (build up your url)
        $.get(weatherUrl, function(res) {
            info += '<p>' +res.name + ": " +res.weather[0].description + '</p>';
            info += '<p> Temperature: '  +res.main.temp + 'F</p>';
            info += '<p> Coord: '  +res.coord.lon + " , " + res.coord.lat + '</p>';
            $('#contentInfo').append(info);
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});