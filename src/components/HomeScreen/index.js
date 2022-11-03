import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import { HomeScreenContainer, TopDataContainer } from "./styled";

export default function HomeScreen({
  city,
  temperature,
  clouds,
  high,
  low,
  icon,
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
          </Grid>
        </Grid>
      </TopDataContainer>
    </HomeScreenContainer>
  );
}
