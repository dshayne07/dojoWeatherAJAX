$(document).ready(function(){
    $(document).on("submit", function(){
        var location = $("#weather").val();
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=0806541ba78894b7f6891ab48e7db84e", function(res) {
            $('h1').text(location);
            $('h4').text("Temperture: "+res.main.temp+"°F");
        }, "json");
        return false;
    });
});