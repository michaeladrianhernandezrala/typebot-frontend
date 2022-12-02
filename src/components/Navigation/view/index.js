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
import CodeIcon from "@mui/icons-material/Code";

import "../styles/index.css";

function Navigation() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="navigation">
      <Grid container justifyContent="space-between">
        <Grid item>
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction
              label="Dashboard"
              icon={<HomeIcon />}
              LinkComponent={Link}
              to="/"
            />
            <BottomNavigationAction
              label="Chatbot"
              icon={<SmartToyIcon />}
              LinkComponent={Link}
              to="/chatbot"
            />
            <BottomNavigationAction
              label="Drawer"
              icon={<ModeIcon />}
              LinkComponent={Link}
              to="/draw"
            />
            <BottomNavigationAction
              label="Stats"
              icon={<QueryStatsIcon />}
              LinkComponent={Link}
              to="/stats"
            />
            <BottomNavigationAction
              label="API"
              icon={<CodeIcon />}
              LinkComponent={Link}
              to="/api"
            />
            <BottomNavigationAction
              label="Setting"
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
