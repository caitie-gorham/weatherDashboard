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
        $("#five-day-cards1").empty()
        $("#five-day-cards2").empty()
        $("#five-day-cards3").empty()
        $("#five-day-cards4").empty()
        $("#five-day-cards5").empty()
        let cityInput = $("#city-input").val()
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4&units=imperial",
            method: "GET"
        }).then(function (response) {
            // get one day from now
            let card1 = $("<div>").attr("class", "card")
            let input1 = $("<div>").attr("class", "card-body five-day")
            let dtText1 = new Date(response.list[0].dt_txt).toLocaleDateString();
            let dateDiv = $("<h5>").attr("class", "card-title")
            dateDiv.text(dtText1)
            let iconInput1 = response.list[0].weather[0].icon
            let iconURL1 = "http://openweathermap.org/img/w/" + iconInput1 + ".png"
            var img = $("<img>").attr("src", iconURL1);
            let tempDiv = $("<p>").attr("class", "card-text")
            tempDiv.append("Temperature: " + response.list[0].main.temp + " °F")
            let humidityDiv = $("<p>").attr("class", "card-text")
            humidityDiv.append("Humidity: " + response.list[0].main.humidity + "%")
            input1.append(dateDiv, img, tempDiv, humidityDiv)
            card1.append(input1)
            $("#five-day-cards1").append(card1)
        
            // get two days from now
            let card2 = $("<div>").attr("class", "card")
            let input2 = $("<div>").attr("class", "card-body five-day")
            let dtText2 = new Date(response.list[7].dt_txt).toLocaleDateString();
            let dateDiv2 = $("<h5>").attr("class", "card-title")
            dateDiv2.text(dtText2)
            let iconInput2 = response.list[7].weather[0].icon
            let iconURL2 = "http://openweathermap.org/img/w/" + iconInput2 + ".png"
            var img2 = $("<img>").attr("src", iconURL2);
            let tempDiv2 = $("<p>").attr("class", "card-text")
            tempDiv2.append("Temperature: " + response.list[7].main.temp + " °F")
            let humidityDiv2 = $("<p>").attr("class", "card-text")
            humidityDiv2.append("Humidity: " + response.list[7].main.humidity + "%")
            input2.append(dateDiv2, img2, tempDiv2, humidityDiv2)
            card2.append(input2)
            $("#five-day-cards2").append(card2)

            // get three days from now
            let card3 = $("<div>").attr("class", "card")
            let input3 = $("<div>").attr("class", "card-body five-day")
            let dtText3 = new Date(response.list[15].dt_txt).toLocaleDateString();
            let dateDiv3 = $("<h5>").attr("class", "card-title")
            dateDiv3.text(dtText3)
            let iconInput3 = response.list[15].weather[0].icon
            let iconURL3 = "http://openweathermap.org/img/w/" + iconInput3 + ".png"
            var img3 = $("<img>").attr("src", iconURL3);
            let tempDiv3 = $("<p>").attr("class", "card-text")
            tempDiv3.append("Temperature: " + response.list[15].main.temp + " °F")
            let humidityDiv3 = $("<p>").attr("class", "card-text")
            humidityDiv3.append("Humidity: " + response.list[15].main.humidity + "%")
            input3.append(dateDiv3, img3, tempDiv3, humidityDiv3)
            card3.append(input3)
            $("#five-day-cards3").append(card3)

            // get four days from now
            let card4 = $("<div>").attr("class", "card")
            let input4 = $("<div>").attr("class", "card-body five-day")
            let dtText4 = new Date(response.list[23].dt_txt).toLocaleDateString();
            let dateDiv4 = $("<h5>").attr("class", "card-title")
            dateDiv4.text(dtText4)
            let iconInput4 = response.list[23].weather[0].icon
            let iconURL4 = "http://openweathermap.org/img/w/" + iconInput4 + ".png"
            var img4 = $("<img>").attr("src", iconURL4);
            let tempDiv4 = $("<p>").attr("class", "card-text")
            tempDiv4.append("Temperature: " + response.list[23].main.temp + " °F")
            let humidityDiv4 = $("<p>").attr("class", "card-text")
            humidityDiv4.append("Humidity: " + response.list[23].main.humidity + "%")
            input4.append(dateDiv4, img4, tempDiv4, humidityDiv4)
            card4.append(input4)
            $("#five-day-cards4").append(card4)

            // get five days from now
            let card5 = $("<div>").attr("class", "card")
            let input5 = $("<div>").attr("class", "card-body five-day")
            let dtText5 = new Date(response.list[31].dt_txt).toLocaleDateString();
            let dateDiv5 = $("<h5>").attr("class", "card-title")
            dateDiv5.text(dtText5)
            let iconInput5 = response.list[31].weather[0].icon
            let iconURL5 = "http://openweathermap.org/img/w/" + iconInput5 + ".png"
            var img5 = $("<img>").attr("src", iconURL5);
            let tempDiv5 = $("<p>").attr("class", "card-text")
            tempDiv5.append("Temperature: " + response.list[31].main.temp + " °F")
            let humidityDiv5 = $("<p>").attr("class", "card-text")
            humidityDiv5.append("Humidity: " + response.list[31].main.humidity + "%")
            input5.append(dateDiv5, img5, tempDiv5, humidityDiv5)
            card5.append(input5)
            $("#five-day-cards5").append(card5)
        })
    })

    // click event that generates the current weather for searched city
    $("#searchBtn").on("click", function (e) {
        e.preventDefault()

        let cityInput = $("#city-input").val()
        $("#city-input").val("")
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4&units=imperial",
            method: "GET"
        }).then(function (response) {
            let searchName = response.name;
            let searchTemp = response.main.temp;
            let searchHumidity = response.main.humidity;
            let searchSpeed = response.wind.speed;
            let localTime = luxon.DateTime.local();
            let formatTime = localTime.toLocaleString(luxon.DateTime.DATE_SHORT);
            let weatherIconCurrent = response.weather[0].icon
            iconURLCurrent = "http://openweathermap.org/img/w/" + weatherIconCurrent + ".png"
            let imgCurrent = $("<img>").attr("src", iconURLCurrent);
            $("#current-icon").html(imgCurrent)
            $("#city-date").text(searchName + " (" + formatTime + ")");
            $("#temperature").text("Temperature: " + searchTemp + " °F");
            $("#humidity").text("Humidity: " + searchHumidity + "%");
            $("#wind-speed").text("Wind Speed: " + searchSpeed + "MPH");
            uvCall(response.coord.lat, response.coord.lon)
        })
    })

    // click event that stores each search city to local storage
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

    // function for ajax call to get UV index; has to be separate because UV index is only available on a different API call than above two sections
    function uvCall(lat, long) {
        $("#uv-index").empty()
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
            $("#uv-index").append(uvValue.append(toggle))
        })
    }

})

