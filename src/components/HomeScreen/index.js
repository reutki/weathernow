import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  HomeScreenContainer,
  TopDataContainer,
  RainProbability,
} from "./styled";

export default function HomeScreen({
  city,
  temperature,
  clouds,
  high,
  low,
  icon,
  population,
  country,
  sunrise,
  sunset,
}) {
  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <HomeScreenContainer>
      <TopDataContainer>
        <img className="icon" src={weatherIcon} alt="icon"></img>
        <Grid className="city_name">
          <Typography variant="h1">{city}</Typography>
        </Grid>
        <Grid className="temperature">
          <Typography className="temperature_data">
            {Math.round(temperature)}°
          </Typography>
        </Grid>
        <Grid className="clouds_status">
          <Typography variant="h3">{clouds}</Typography>
        </Grid>
        <Grid className="high_low_container">
          <Grid className="temperature_high">
            <Typography variant="h3">H:{Math.round(high)}°</Typography>
          </Grid>
          <Grid className="temperature_low">
            <Typography variant="h3">L:{Math.round(low)}°</Typography>
            <Typography variant="h3">L:{population}</Typography>
            <Typography variant="h3">L:{country}</Typography>
            <Typography variant="h3">L:{sunrise}</Typography>
            <Typography variant="h3">L:{sunset}</Typography>
          </Grid>
        </Grid>
      </TopDataContainer>
      <RainProbability>
        <Grid>
          <Typography>Time</Typography>
          <Typography>11:02</Typography>
        </Grid>
        <Grid>
          <Typography>UV</Typography>
          <Typography>4</Typography>
        </Grid>
        <Grid>
          <Typography>% Rain</Typography>
          <Typography>10%</Typography>
        </Grid>
        <Grid>
          <Typography>AQ</Typography>
          <Typography>22</Typography>
        </Grid>
      </RainProbability>
    </HomeScreenContainer>
  );
}
