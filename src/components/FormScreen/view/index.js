import React from "react";
import { Container, createTheme } from "@mui/system";
import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  ThemeProvider,
} from "@mui/material";

function FormScreen({ children }) {
  return (
    <Box component="main">
      <Container>
        <Grid>
          <Paper elevation={3}>{children}</Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormScreen;
