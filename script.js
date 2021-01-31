$(document).ready(function () {

    // get array stored in local storage
    var historyList = JSON.parse(window.localStorage.getItem("historyList")) || [];
    // and create a list using the values
    for (i = 0; i < historyList.length; i++) {
        $(".history-group").append('<a href="#" class="list-group-item list-group-item-action history">' + historyList[i] + '</a>');
    }

    // click event that generates the five day forecast for searched city
    $("#searchBtn").on("click", function (e) {
        e.preventDefault();
        let cityInput = $("#city-input").val()
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4&units=imperial",
            method: "GET"
        }).then(function (response) {
            // get one day from now
            console.log(response)
            let dtText1 = response.list[0].dt_txt;
            let dtText1Loc = new Date(dtText1).toLocaleDateString()
            $("#date-input-1").text(dtText1Loc)
            let iconInput1 = response.list[0].weather[0].icon
            iconURL1 = "http://openweathermap.org/img/w/" + iconInput1 + ".png"
            var img = $("<img>").attr("src", iconURL1);
            $("#card-1").append(img)
            let tempInput1 = response.list[0].main.temp
            $("#temp-input-1").text("Temperature: " + tempInput1 + " °F")
            let humInput1 = response.list[0].main.humidity
            $("#humidity-input-1").text("Humidity: " + humInput1 + "%")

            // get two days from now
            let dtText2 = response.list[7].dt_txt;
            let dtText2Loc = new Date(dtText2).toLocaleDateString();
            $("#date-input-2").text(dtText2Loc)
            let iconInput2 = response.list[7].weather[0].icon
            iconURL2 = "http://openweathermap.org/img/w/" + iconInput2 + ".png"
            var img = $("<img>").attr("src", iconURL2);
            $("#card-2").append(img)
            let tempInput2 = response.list[7].main.temp
            $("#temp-input-2").text("Temperature: " + tempInput2 + " °F")
            let humInput2 = response.list[7].main.humidity
            $("#humidity-input-2").text("Humidity: " + humInput2 + "%")

            // get three days from now
            let dtText3 = response.list[15].dt_txt;
            let dtText3Loc = new Date(dtText3).toLocaleDateString()
            $("#date-input-3").text(dtText3Loc)
            let iconInput3 = response.list[15].weather[0].icon
            iconURL3 = "http://openweathermap.org/img/w/" + iconInput3 + ".png"
            var img = $("<img>").attr("src", iconURL3);
            $("#card-3").append(img)
            let tempInput3 = response.list[15].main.temp
            $("#temp-input-3").text("Temperature: " + tempInput3 + " °F")
            let humInput3 = response.list[15].main.humidity
            $("#humidity-input-3").text("Humidity: " + humInput3 + "%")

            // get four days from now
            let dtText4 = response.list[23].dt_txt;
            let dtText4Loc = new Date(dtText4).toLocaleDateString();
            $("#date-input-4").text(dtText4Loc)
            let iconInput4 = response.list[23].weather[0].icon
            iconURL4 = "http://openweathermap.org/img/w/" + iconInput4 + ".png"
            var img = $("<img>").attr("src", iconURL4);
            $("#card-4").append(img)
            let tempInput4 = response.list[23].main.temp
            $("#temp-input-4").text("Temperature: " + tempInput4 + " °F")
            let humInput4 = response.list[23].main.humidity
            $("#humidity-input-4").text("Humidity: " + humInput4 + "%")

            // get five days from now
            let dtText5 = response.list[31].dt_txt;
            let dtText5Loc = new Date(dtText5).toLocaleDateString()
            $("#date-input-5").text(dtText5Loc)
            let iconInput5 = response.list[31].weather[0].icon
            iconURL5 = "http://openweathermap.org/img/w/" + iconInput5 + ".png"
            var img = $("<img>").attr("src", iconURL5);
            $("#card-5").append(img)
            let tempInput5 = response.list[31].main.temp
            $("#temp-input-5").text("Temperature: " + tempInput5 + " °F")
            let humInput5 = response.list[31].main.humidity
            $("#humidity-input-5").text("Humidity: " + humInput5 + "%")
        })
    })

    // click event that generates the current weather for searched city
    $("#searchBtn").on("click", function (e) {
        e.preventDefault()
        let cityInput = $("#city-input").val()
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4&units=imperial",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            let searchName = response.name;
            let searchTemp = response.main.temp;
            let searchHumidity = response.main.humidity;
            let searchSpeed = response.wind.speed;
            let localTime = luxon.DateTime.local();
            let formatTime = localTime.toLocaleString(luxon.DateTime.DATE_SHORT);
            let weatherIconCurrent = response.weather[0].icon
            iconURLCurrent = "http://openweathermap.org/img/w/" + weatherIconCurrent + ".png"
            var imgCurrent = $("<img>").attr("src", iconURLCurrent);
            $("#current-cont").prepend(imgCurrent)
            $("#city-date").text(searchName + " (" + formatTime + ")");
            $("#temperature").text("Temperature: " + searchTemp + " °F");
            $("#humidity").text("Humidity: " + searchHumidity + "%");
            $("#wind-speed").text("Wind Speed: " + searchSpeed + "MPH");
            uvCall(response.coord.lat, response.coord.lon)
        })
    })

    $("#searchBtn").on("click", function () {
        let cityInput = $("#city-input").val();
        if (historyList.indexOf(cityInput) === -1) {
            historyList.push(cityInput);
            window.localStorage.setItem("historyList", JSON.stringify(historyList));
        }
    })

    // create a click event for each item in the list that fills in the search input
    $(".history").on("click", function () {
        $("#city-input").val($(this).text())
    });

    function uvCall(lat, long) {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/uvi?appid=8755afb2d2e1bf2924f3c5f7af0776c4&lat=" + lat + "&lon=" + long,
            method: "GET"
        }).then(function (response) {
            let uvValue = $("<p>").text("UV: ");
            let toggle = $("<span>").addClass("btn btn-sm").text(response.value);
            if (response.value < 3) {
                toggle.addClass("btn-success");
            }
            else if (response.value < 7) {
                toggle.addClass("btn-warning");
            }
            else {
                toggle.addClass("btn-danger");
            }
            $("#current-cont").append(uvValue.append(toggle))
        })
    }

})

