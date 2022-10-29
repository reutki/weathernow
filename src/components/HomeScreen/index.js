import { Grid, SwipeableDrawer, Typography } from "@mui/material";
import React from "react";
import { HomeScreenContainer } from "./styled";

export default function HomeScreen({ city, temperature, clouds, high, low }) {
  function open(params) {
    console.log("opened");
  }
  function close(params) {
    console.log("closed");
  }
  return (
    <HomeScreenContainer>
      <Grid container>
        <Grid className="city_name">
          <Typography variant="h1">{city}</Typography>
        </Grid>
        <Grid className="temperature">
          <Typography>{temperature}</Typography>
        </Grid>
        <Grid className="cloud_status">
          <Typography>{clouds}</Typography>
        </Grid>
        <Grid container>
          <Grid className="temperature_high">
            <Typography>{high}</Typography>
          </Grid>
          <Grid className="temperature_low">
            <Typography>{low}</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>Image</Grid>
          <Grid>
            {/* <SwipeableDrawer
              open={false}
              onOpen={open}
              onClose={close}
            ></SwipeableDrawer> */}
          </Grid>
        </Grid>
      </Grid>
    </HomeScreenContainer>
  );
}

{
  /* <HomeScreen
        city={data.city}
        temperature={data.temperature}
        clouds={data.clouds}
        high={data.high}
        low={data.low}
      /> */
}
{
  /* <HomeScreen
        city={data.city}
        temperature={data.temperature}
        clouds={data.clouds}
        high={data.high}
        low={data.low}
      /> */
}
