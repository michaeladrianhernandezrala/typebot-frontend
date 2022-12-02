import React from "react";
import { Box, Grid } from "@mui/material";

import Navigation from "../../Navigation/view";

import "../styles/index.css";

function Layout({ children }) {
  return (
    <Box className="layout" component="main">
      <Grid className="layout-section" container>
        <Grid item xs={7} md={9} lg={10}>
          {children}
        </Grid>
        <Grid item xs={3} lg={1}>
          Aside
        </Grid>
      </Grid>
      <Navigation />
    </Box>
  );
}

export default Layout;
