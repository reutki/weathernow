import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { useState, useEffect } from "react";
import { Forecast } from "./components/Forecast";
import { InputBase, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Loader } from "./components/LoadingScreen";
import Welcome from "./components/WelcomeScreen";

function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [welcome, setWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setWelcome(false);
    }, 2000);
  }, []);

  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = "ada1fdb05bf77ae3b41e5a76923d558f";

  const handleSearchLocation = () => {
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
        setWeatherData(weatherResponse);
        setForecastData(forecastResponse);
        setIsLoading(false);
      })
      .catch((response) => console.log(response));
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setTimeout(() => {
        setIsLoading(true);
        handleSearchLocation();
      }, 2000);
    }
  };

  return (
    <div className="App_container">
      {welcome ? (
        <Welcome />
      ) : (
        <form
          className="searchForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <InputBase
            autoFocus
            type={search}
            className="SearchBar"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchLocation}
            placeholder="Search for a city"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </form>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {weatherData !== "" || null || undefined ? (
            <HomeScreen data={weatherData} />
          ) : null}
          {forecastData !== "" || null || undefined ? (
            <Forecast data={forecastData} />
          ) : null}
        </>
      )}
    </div>
  );
}
export default App;
