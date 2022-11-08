import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  HomeScreenContainer,
  TopDataContainer,
  RainProbability,
} from "./styled";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
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
  time,
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
      <RainProbability>
        <Grid>
          <AccessTimeIcon sx={{ color: "#335d7e" }} />
          <Typography>Time</Typography>
          <Typography>{time}</Typography>
        </Grid>
        <Grid>
          <WbTwilightIcon sx={{ color: "#eeaf61" }} />
          <Typography>Sunrise</Typography>
          <Typography>{sunrise}</Typography>
        </Grid>
        <Grid>
          <WbTwilightIcon sx={{ color: "#e84f0c" }} />
          <Typography>Sunset</Typography>
          <Typography>{sunset}</Typography>
        </Grid>
        <Grid>
          <UmbrellaIcon sx={{ color: "#6d5c7d" }} />
          <Typography>Rain%</Typography>
          <Typography>10%</Typography>
        </Grid>
      </RainProbability>
    </HomeScreenContainer>
  );
}
