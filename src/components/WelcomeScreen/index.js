import React from "react";
import AirIcon from "@mui/icons-material/Air";
import { Typography } from "@mui/material";
import { WelcomeStyle } from "./styled";
export default function Welcome() {
  return (
    <WelcomeStyle
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        opacity: { ease: "easeIn", duration: 3 },
      }}
    >
      <AirIcon className="icon" fontSize="large" />
      <Typography variant="h1">Weather Now</Typography>
    </WelcomeStyle>
  );
}
