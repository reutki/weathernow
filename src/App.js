import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { useState, useEffect } from "react";
import { Forecast } from "./components/Forecast";
import { InputBase, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Loader } from "./components/LoadingScreen";
import Welcome from "./components/WelcomeScreen";
import ErrorScreen from "./components/ErrorScreen";

export function App() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [forecastData, setForecastData] = useState("");
  const [welcome, setWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
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

        if ((response[0].ok == true) & (response[1].ok == true)) {
          setWeatherData(weatherResponse);
          setForecastData(forecastResponse);
          setIsLoading(false);
          setError(false);
        }
      })

      .catch(
        setTimeout(() => {
          setIsLoading(false);
        }, 1500),
        setError(true),
        (err) => {
          console.log(isError);
          console.log(err);
        }
      );
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      handleSearchLocation();
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
          {isError ? (
            <ErrorScreen />
          ) : (
            <>
              {weatherData !== "" || undefined || null ? (
                <HomeScreen data={weatherData} />
              ) : null}
              {forecastData !== "" || undefined || null ? (
                <Forecast data={forecastData} />
              ) : null}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
