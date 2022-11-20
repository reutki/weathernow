import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import { ErrorStyled, IconStyle } from "./styled";

export default function ErrorScreen() {
  return (
    <>
      <ErrorStyled>
        <div className="error_container">
          <IconStyle
            animate={{ rotate: 180 }}
            transition={{
              duration: 0.3,
            }}
          >
            <CloseIcon fontSize="large" />
          </IconStyle>
          <Typography variant="h1">Error</Typography>
        </div>
        <Typography
          variant="caption"
          sx={{ color: "white", marginTop: "10vh" }}
        >
          You may have entered a wrong city name, try again...
        </Typography>
      </ErrorStyled>
    </>
  );
}
