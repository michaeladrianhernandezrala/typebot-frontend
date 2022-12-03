import { createTheme } from "@mui/material";

const themeSettings = {
  palette: {
    primary: {
      main: "#363635",
    },
    secondary: {
      main: "#81E979",
    },
    darkGray: "#595A4A",
    light: "#B0FE76",
    darkGreen: "#8FBB99",
  },
  typography: {
    fontFamily: '"Roboto Mono", monospace',
    h2: {
      //fontWeight: "500",
      //fontSize: "20px",
    },
  },
};

const theme = createTheme(themeSettings);

export default theme;
