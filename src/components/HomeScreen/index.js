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
export default function HomeScreen({ data }) {
  const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const timeFormatter = (date) => {
    let time = new Date(date);
    return time.toLocaleTimeString();
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
          <Typography>{timeFormatter(data.dt)}</Typography>
        </Grid>
        <Grid>
          <WbTwilightIcon sx={{ color: "#eeaf61" }} />
          <Typography>Sunrise</Typography>
          <Typography>{timeFormatter(data.sys.sunrise)}</Typography>
        </Grid>
        <Grid>
          <WbTwilightIcon sx={{ color: "#e84f0c" }} />
          <Typography>Sunset</Typography>
          <Typography>{timeFormatter(data.sys.sunset)}</Typography>
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
