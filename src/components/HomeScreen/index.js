import { Avatar, Grid, SwipeableDrawer, Typography } from "@mui/material";
import React from "react";
import {
  HomeScreenContainer,
  TopDataContainer,
  HouseContainer,
} from "./styled";

export default function HomeScreen({
  city,
  temperature,
  clouds,
  high,
  low,
  icon,
}) {
  const weatherIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  function open(params) {
    console.log("opened");
  }
  function close(params) {
    console.log("closed");
  }
  return (
    <HomeScreenContainer>
      <TopDataContainer>
        <Grid className="city_name">
          <Typography variant="h1">{city}</Typography>
        </Grid>
        <Grid className="temperature">
          <Typography className="temperature_data">
            {Math.round(temperature)}
          </Typography>
        </Grid>
        <Grid className="clouds_status">
          <Typography variant="h3">{clouds}</Typography>
        </Grid>
        <img className="icon" src={weatherIcon} alt="icon"></img>
        <Grid className="high_low_container">
          <Grid className="temperature_high">
            <Typography variant="h3">H:{Math.round(high)}</Typography>
          </Grid>
          <Grid className="temperature_low">
            <Typography variant="h3">L:{Math.round(low)}</Typography>
          </Grid>
        </Grid>
      </TopDataContainer>
    </HomeScreenContainer>
  );
}
