# Weather Dashboard

## Table of Contents 

* [Overview](#Overview)
* [Access](#Access)
* [Details](#Details)
* [Future](#Future)


## Overview

This weather dashboard allows a user to search a city and get back the current weather and a five-day forecast for that city from the OpenWeatherMap API. 

## Access

You can find the deployed webpage here: https://caitie-gorham.github.io/weatherDashboard/#

You can find the GitHub repo here: https://github.com/caitie-gorham/weatherDashboard

## Details

This repo contains a weather dashboard that allows the user to search one city at a time. The dashboard then shows the user the current weather for that city and a five-day forecast. This dashboard was created as part of the GT full-stack development bootcamp.

This repo retrieves all weather data and weather icons from the OpenWeatherMap API. In order to get the information for the current weather, the UV index, and the five-day forecast, there are three separate API calls. Each call uses the ajax method. More information on the API can be found here: https://openweathermap.org/api. 

This dashboard takes advantage of local storage, which stores each searched city in a list. When the page is refreshed, the list of searched cities is appended to the page. Each of these cities can be clicked to fill in the  search bar again. 

## Future

With more time and knowledge, I would make the following changes/improvements:

* Have the stored cities click event handler re-start the API calls instead of simply filling in the search bar again
* Have searched cities immediately appended to historical list instead of having the user refresh the page to see the list
