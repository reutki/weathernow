import React from "react";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import HomeScreen from "../HomeScreen";
import { StyledSearchBar } from "./styled";

export default function Search() {
  const [data, setData] = useState("");
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

  return (
    <StyledSearchBar>
      <input
        className="SearchBar"
        onChange={(event) => setSearch(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Search for a city or airport"
      />
      {data !== "" ? (
        <HomeScreen
          city={data.name}
          temperature={data.main.temp}
          clouds={
            data.weather[0] ? <Grid>{data.weather[0].description}</Grid> : null
          }
          high={data.main.temp_max}
          low={data.main.temp_min}
          icon={data.weather[0].icon}
          population={data.city.population}
          country={data.city.country}
          sunrise={data.city.sunrise}
          sunset={data.city.sunset}
        />
      ) : null}
    </StyledSearchBar>
  );
}
