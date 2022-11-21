import React from "react";

import { Button, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FormScreen from "../../FormScreen/view";

function RegisterScreen() {
  return (
    <FormScreen>
      <Grid>
        <Paper elevation={3}>
          <form>
            <TextField
              fullWidth
              label="Name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Password"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button fullWidth type="submit" variant="contained" color="primary">
              Sign up
            </Button>
          </form>
        </Paper>
      </Grid>
    </FormScreen>
  );
}

export default RegisterScreen;
