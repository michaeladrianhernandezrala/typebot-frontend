import React from "react";
import { Box } from "@mui/material";

import Navigation from "../../Navigation/view";

import "../styles/index.css";

function Layout({ children }) {
  return (
    <Box className="layout" component="main">
      {children}
      <Navigation />
    </Box>
  );
}

export default Layout;
