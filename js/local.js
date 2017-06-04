$(function() {
    var loc;
    $.getJSON('https://ipinfo.io', function(data) {
        loc = data.loc.split(",");
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' +
            loc[0] + '&lon=' + loc[1] + '&appid=681b5250eca7995efbf36b2edc790920&units=Imperial',
            function(data) {
                $("#location").text(data.name);
                $("#description").text(data.weather[0].description);
                $("#temp").text(Math.round(data.main.temp) + " °F");

                $("#temp").mouseenter(function() {
                    $("#temp").text(Math.round((data.main.temp - 32) * (5 / 9)) + " °C");
                });

                $("#temp").mouseleave(function() {
                    $("#temp").text(Math.round(data.main.temp) + " °F");
                });

                switch (data.weather[0].main) {
                    case "Clear":
                        $("i").removeClass().addClass('wi wi-day-sunny')
                        break;
                    case "drizzle":
                        $("i").removeClass().addClass('wi wi-day-fog')
                        break;
                    case "clouds":
                        $("i").removeClass().addClass('wi wi-day-cloudy')
                        break;
                    case "rain":
                        $("i").removeClass().addClass('wi wi-day-rain')
                        break;
                    case "snow":
                        $("i").removeClass().addClass('wi wi-day-snow')
                        break;
                    case "thunderstom":
                        $("i").removeClass().addClass('wi wi-day-thunderstorm')
                        break;
                    default:
                        $("i").removeClass().addClass('wi wi-day-sunny')
                }
            })
    })

})
