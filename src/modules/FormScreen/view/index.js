import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function FormScreen({ children }) {
  return (
    <Box component="main">
      <Container maxWidth="sm">{children}</Container>
    </Box>
  );
}

export default FormScreen;
