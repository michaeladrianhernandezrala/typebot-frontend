import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function Palette({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Palette;
