import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  HomeScreenContainer,
  TopDataContainer,
  RainProbability,
} from "./styled";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AirIcon from "@mui/icons-material/Air";

export default function HomeScreen({ data }) {
  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const timeFormatter = (time) => {
    const milliseconds = time * 1000; // 1575909015000

    const dateObject = new Date(milliseconds);

    const humanDateFormat = dateObject.toLocaleString(); //2019-12-9 10:30:15
    dateObject.toLocaleString("en-GB", { weekday: "long" }); // Monday
    dateObject.toLocaleString("en-GB", { month: "long" }); // December
    dateObject.toLocaleString("en-GB", { day: "numeric" }); // 9
    dateObject.toLocaleString("en-GB", { year: "numeric" }); // 2019
    dateObject.toLocaleString("en-GB", { hour: "numeric" }); // 10 AM
    dateObject.toLocaleString("en-GB", { minute: "numeric" }); // 30
    dateObject.toLocaleString("en-GB", { second: "numeric" }); // 15
    dateObject.toLocaleString("en-GB", { timeZoneName: "short" }); // 12/9/2019, 10:30:15 AM CST

    return [humanDateFormat.slice(12, 17), humanDateFormat.slice(12, 16)];
  };
  return (
    <HomeScreenContainer>
      <TopDataContainer>
        <img className="icon" src={weatherIcon} alt="icon"></img>
        <Grid className="city_name">
          <Typography variant="h1">{data.name}</Typography>
        </Grid>
        <Grid className="temperature">
          <Typography className="temperature_data">
            {Math.round(data.main.temp)}°
          </Typography>
        </Grid>
        <Grid className="clouds_status">
          {data.weather[0] ? (
            <Typography variant="h3">{data.weather[0].description}</Typography>
          ) : null}
        </Grid>
        <Grid className="high_low_container">
          <Grid className="temperature_high">
            <Typography variant="h3">
              H:{Math.round(data.main.temp_max)}°
            </Typography>
          </Grid>
          <Grid className="temperature_low">
            <Typography variant="h3">
              L:{Math.round(data.main.temp_min)}°
            </Typography>
          </Grid>
        </Grid>
      </TopDataContainer>
      <RainProbability>
        <Grid>
          <AccessTimeIcon sx={{ color: "#335d7e" }} />
          <Typography>Time</Typography>
          <Typography>{timeFormatter(data.dt)[0]}</Typography>
        </Grid>
        <Grid>
          <WbTwilightIcon sx={{ color: "#eeaf61" }} />
          <Typography>Sunrise</Typography>
          <Typography>{timeFormatter(data.sys.sunrise)[1]}</Typography>
        </Grid>
        <Grid>
          <WbTwilightIcon sx={{ color: "#e84f0c" }} />
          <Typography>Sunset</Typography>
          <Typography>{timeFormatter(data.sys.sunset)[1]}</Typography>
        </Grid>
        <Grid>
          <AirIcon sx={{ color: "#6d5c7d" }} />
          <Typography>Wind</Typography>
          <Typography>{data.wind.speed}Km/H</Typography>
        </Grid>
      </RainProbability>
    </HomeScreenContainer>
  );
}
