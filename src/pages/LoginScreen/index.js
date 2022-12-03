import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import FormScreen from "../../components/FormScreen/view";
import authService from "../../services/authService";
import { useDispatch } from "react-redux";

const validationSchema = yup.object({
  email: yup
    .string("Email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Password").required("Password is required"),
});

function LoginScreen() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const authUserRequest = async (email, password) => {
    setIsLoading(true);

    const response = await authService.loginUser(email, password);
    dispatch();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }) => {
      try {
        authUserRequest(email, password);
        navigate("/");
      } catch (error) {}
    },
  });
  return (
    <FormScreen>
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <TextField
              id="email"
              name="email"
              variant="standard"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="password"
              name="password"
              variant="standard"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              autoFocus
            />
          </Grid>
          <Grid item xs={10}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormScreen>
  );
}

export default LoginScreen;
