$(document).ready(function() {
    
    const historyInput = $(".history").val()
    // const queryURLCurrentHist = "http://api.openweathermap.org/data/2.5/weather?q=" + historyInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4&units=imperial"

    $("#searchBtn").on("click", function(e){
        e.preventDefault();
        let cityInput = $("#city-input").val()
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4&units=imperial",
            method: "GET"
        }).then(function(response){
            // get one day from now
            let dtText1 = response.list[0].dt_txt;
            $("#date-input-1").text(dtText1)
            let tempInput1 = response.list[0].main.temp
            $("#temp-input-1").text("Temperature: " + tempInput1 + " °F")
            let humInput1 = response.list[0].main.humidity
            $("#humidity-input-1").text("Humidity: " + humInput1 + "%")
            
            // get two days from now
            let dtText2 = response.list[7].dt_txt;
            $("#date-input-2").text(dtText2)
            let tempInput2 = response.list[7].main.temp
            $("#temp-input-2").text("Temperature: " + tempInput2 + " °F")
            let humInput2 = response.list[7].main.humidity
            $("#humidity-input-2").text("Humidity: " + humInput2 + "%")

            // get three days from now
            let dtText3 = response.list[15].dt_txt;
            $("#date-input-3").text(dtText3)
            let tempInput3 = response.list[15].main.temp
            $("#temp-input-3").text("Temperature: " + tempInput3 + " °F")
            let humInput3 = response.list[15].main.humidity
            $("#humidity-input-3").text("Humidity: " + humInput3 + "%")
            
            // get four days from now
            let dtText4 = response.list[23].dt_txt;
            $("#date-input-4").text(dtText4)
            let tempInput4 = response.list[23].main.temp
            $("#temp-input-4").text("Temperature: " + tempInput4 + " °F")
            let humInput4 = response.list[23].main.humidity
            $("#humidity-input-4").text("Humidity: " + humInput4 + "%")
            
            // get five days from now
            let dtText5 = response.list[31].dt_txt;
            $("#date-input-5").text(dtText5)
            let tempInput5 = response.list[31].main.temp
            $("#temp-input-5").text("Temperature: " + tempInput5 + " °F")
            let humInput5 = response.list[31].main.humidity
            $("#humidity-input-5").text("Humidity: " + humInput5 + "%")
        })
    })
    

    $("#searchBtn").on("click", function(e){
        e.preventDefault()
        let cityInput = $("#city-input").val()
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=8755afb2d2e1bf2924f3c5f7af0776c4&units=imperial",
            method: "GET"
        }).then(function(response){
            let searchName = response.name;
            let searchTemp = response.main.temp;
            let searchHumidity = response.main.humidity;
            let searchSpeed = response.wind.speed;
            $("#city-date").text(searchName);
            $("#temperature").text("Temperature: " + searchTemp + " °F");
            $("#humidity").text("Humidity: " + searchHumidity + "%");
            $("#wind-speed").text("Wind Speed: " + searchSpeed + "MPH");
            localStorage.setItem("cityName", cityInput) 
        })
    })
    
    // button from history on click event  
    // $(".history").on("click", function(){
    //     $.ajax({
    //         url: queryURLCurrentHist,
    //         method: "GET"
    //     }).then(function(response){
    //         const searchName = response.name;
    //         const searchTemp = response.main.temp;
    //         const searchHumidity = response.main.humidity;
    //         const searchSpeed = response.wind.speed;
    //         $("#city-date").text(searchName);
    //         $("#temperature").text("Temperature: " + searchTemp + " °F");
    //         $("#humidity").text("Humidity: " + searchHumidity + "%");
    //         $("#wind-speed").text("Wind Speed: " + searchSpeed + "MPH");
    //     });
    // });

})

