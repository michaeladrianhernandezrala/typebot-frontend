import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid,
  Tooltip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ModeIcon from "@mui/icons-material/Mode";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";

import "../styles/index.css";

function Navigation() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="navigation">
      <Grid container justifyContent="space-between">
        <Grid item xs={3}>
          <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction
              icon={<HomeIcon />}
              LinkComponent={Link}
              to="/"
            />
            <BottomNavigationAction
              icon={<SmartToyIcon />}
              LinkComponent={Link}
              to="/chatbot"
            />
            <BottomNavigationAction
              icon={<ModeIcon />}
              LinkComponent={Link}
              to="/draw"
            />
            <BottomNavigationAction
              icon={<QueryStatsIcon />}
              LinkComponent={Link}
              to="/stats"
            />
          </BottomNavigation>
        </Grid>
        <Grid item xs={1}>
          <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction
              icon={<SettingsIcon />}
              LinkComponent={Link}
              to="/setting"
            />
          </BottomNavigation>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Navigation;
