$(document).ready(function() {
    
    const cityInput = $("#cityInput").val()
    const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4"
    

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=8755afb2d2e1bf2924f3c5f7af0776c4",
        method: "GET"
    }).then(function(response){
        console.log(response)
        const searchName = response.name;
        const searchTemp = response.main.temp;
        const searchHumidity = response.main.humidity;
        const searchSpeed = response.wind.speed;
        $("#city-date").text(searchName);
        $("#temperature").text("Temperature: " + searchTemp + " degrees F");
        $("#humidity").text("Humidity: " + searchHumidity + "%");
        $("#wind-speed").text("Wind Speed: " + searchSpeed + "MPH");

    })
    
    // $("#searchBtn").on("click", function(){
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response){
    //         const searchName = response.name;
    //         const searchTemp = response.main.temp;
    //         const searchHumidity = response.main.humidity;
    //         const searchSpeed = response.wind.speed;
    //         $("#city-date").text(searchName);
    //         $("#temperature").text("Temperature: " + searchTemp + " degrees F");
    //         $("#humidity").text("Humidity: " + searchHumidity + "%");
    //         $("#wind-speed").text("Wind Speed: " + searchSpeed + "MPH");

    //     })
    // })
    

    // api call to get five day forecast    

})

