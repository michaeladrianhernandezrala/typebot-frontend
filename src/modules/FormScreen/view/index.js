import { Box, CssBaseline, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function FormScreen({ children }) {
  return (
    <Box component="main">
      <Container maxWidth="sm">
        <CssBaseline />
        <Grid>
          <Paper elevation={3}>{children}</Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormScreen;
