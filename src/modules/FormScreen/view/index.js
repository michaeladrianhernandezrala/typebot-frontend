import { Box, CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { ToastContainer } from "react-toastify";

function FormScreen({ children }) {
  return (
    <Box component="main">
      <Container maxWidth="sm">
        <CssBaseline />
        {children}
      </Container>
    </Box>
  );
}

export default FormScreen;
