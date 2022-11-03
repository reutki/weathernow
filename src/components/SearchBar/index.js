import React from "react";
import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import HomeScreen from "../HomeScreen";
import { StyledSearchBar } from "./styled";

export default function Search() {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(API_URL).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  const searchBar = document.querySelector("input");

  const API_KEY = "ada1fdb05bf77ae3b41e5a76923d558f";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;

  return (
    <StyledSearchBar>
      <input
        className="SearchBar"
        onChange={(event) => setSearch(event.target.value)}
        onBlur={searchLocation}
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
          latitude={data.coord.lat}
          longitude={data.coord.lon}
        />
      ) : null}
    </StyledSearchBar>
  );
}
