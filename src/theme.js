import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#ffff",
      secondary: "rgba(60, 60, 67, 0.6)",
      disabled: "rgba(60, 60, 67, 0.3)",
      hint: "rgba(60, 60, 67, 0.18)",
    },
  },
  typography: {
    //LargeTitle
    h1: {
      fontSize: 34,
      letterSpacing: "0.37px",
      fontWeight: 700,
      lineHeight: "41px",
    },
    //caption1
    caption: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "16px",
    },
    //Title1
    h2: {
      fontSize: "28px",
      lineHeight: "33.41px",
      letterSpacing: "0.36px",
      fontWeight: 700,
    },
    //Title2
    h3: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.38px",
    },
    //Headline
    subtitle1: {
      fontWeight: 600,
      fontSize: "17px",
      letterSpacing: "-0.41 px",
      fontStyle: "italic",
    },
    //Body
    body1: {
      fontSize: "17px",
      fontWeight: 600,
      letterSpacing: "-0.41 px",
      lineHeight: "22px",
    },
    //callout
    body2: {
      fontSize: "16px",
      lineHeight: "21px",
      letterSpacing: "-0.32 px",
      fontWeight: 600,
    },
    //subheadline
    subtitle2: {
      lineHeight: "20px",
      letterSpacing: "-0.5 px",
      fontWeight: 600,
      fontSize: "15px",
    },
  },
});
