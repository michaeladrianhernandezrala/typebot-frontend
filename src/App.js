import React from "react";
import { Provider } from "react-redux";
import { Fragment } from "react";

import { CssBaseline } from "@mui/material";

import Palette from "./components/Palette";
import Router from "./routes/index";

function App() {
  return (
    <div className="app">
      <Palette>
        <CssBaseline />
        <Fragment>
          <Router />
        </Fragment>
      </Palette>
    </div>
  );
}

export default App;
