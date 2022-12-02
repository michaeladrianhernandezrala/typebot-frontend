import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";

import FormScreen from "../../../components/FormScreen/view";
import accountService from "../../../services/accountService";

const validationSchema = yup.object({
  username: yup.string("Name").required("Name is required"),
  email: yup
    .string("Email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Password").required("Password is required"),
  confirmPassword: yup
    .string("Confirm Password")
    .required("You must confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function RegisterScreen() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      try {
        await accountService.createAccount(data);
        navigate("/login");
      } catch (error) {}
    },
  });

  return (
    <FormScreen>
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <TextField
              id="username"
              name="username"
              variant="standard"
              label="Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              fullWidth
              autoFocus
            />
          </Grid>
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
              error={formik.touched.email && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              variant="standard"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={10}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormScreen>
  );
}

export default RegisterScreen;
