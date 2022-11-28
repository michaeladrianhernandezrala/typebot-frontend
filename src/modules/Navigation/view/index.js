import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
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
      <BottomNavigation value={value} onChange={handleChange}>
        <Tooltip title="Home" placement="top-start">
          <BottomNavigationAction
            icon={<HomeIcon />}
            LinkComponent={Link}
            to="/"
          />
        </Tooltip>
        <Tooltip title="Home" placement="top-start">
          <BottomNavigationAction
            icon={<SmartToyIcon />}
            LinkComponent={Link}
            to="/chatbot"
          />
        </Tooltip>

        <Tooltip title="Home" placement="top-start">
          <BottomNavigationAction
            icon={<ModeIcon />}
            LinkComponent={Link}
            to="/draw"
          />
        </Tooltip>

        <Tooltip title="Home" placement="top-start">
          <BottomNavigationAction
            icon={<QueryStatsIcon />}
            LinkComponent={Link}
            to="/stats"
          />
        </Tooltip>

        <Tooltip title="Home" placement="top-start">
          <BottomNavigationAction
            icon={<SettingsIcon />}
            LinkComponent={Link}
            to="/setting"
          />
        </Tooltip>
      </BottomNavigation>
    </Box>
  );
}

export default Navigation;
