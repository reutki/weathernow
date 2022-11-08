import React from "react";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import HomeScreen from "../HomeScreen";
import { StyledSearchBar } from "./styled";

export default function Search() {
  const [search, setSearch] = useState("");
  const [getCity, setGetCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [forecastData, setForecastData] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState("");

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      handleSearchLocation();
    }
  };

  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = "ada1fdb05bf77ae3b41e5a76923d558f";

  const handleSearchLocation = (dataSearch) => {
    const weatherDataFetch = fetch(
      `${BASE_URL}/weather?q=${search}&&appid=${API_KEY}&units=metric`
    );
    const forecastDataFetch = fetch(
      `${BASE_URL}/forecast?q=${search}&appid=${API_KEY}&units=metric`
    );

    Promise.all([weatherDataFetch, forecastDataFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setGetCity(dataSearch);
        setWeatherData(weatherResponse);
        setForecastData(forecastResponse);
        console.log(weatherResponse);
        console.log(forecastResponse);
      })
      .catch(console.log);
  };
  const timeFormatter = (time) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(time * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    const formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  };
  return (
    <StyledSearchBar>
      <input
        className="SearchBar"
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Search for a city or airport"
      />
      {weatherData !== "" ? (
        <HomeScreen
          city={weatherData.name}
          temperature={weatherData.main.temp}
          clouds={
            weatherData.weather[0] ? (
              <Grid>{weatherData.weather[0].description}</Grid>
            ) : null
          }
          high={weatherData.main.temp_max}
          low={weatherData.main.temp_min}
          icon={weatherData.weather[0].icon}
          sunrise={timeFormatter(weatherData.sys.sunrise)}
          sunset={timeFormatter(weatherData.sys.sunset)}
          time={timeFormatter(weatherData.dt)}
        />
      ) : null}
    </StyledSearchBar>
  );
}
