import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Container } from "@mui/system";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ClipLoader } from "react-spinners";

import Notification from "../../../commonComponents/Notification";
import authService from "../../../services/authService";
import { NotificationContainer } from "react-notifications";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string("Enter your password").required("Password is required"),
  confirmPassword: yup
    .string("Confirm password")
    .required("You must confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function RegisterScreen() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await authService.postRegisterUser(values);
        setLoading(false);
        Notification("success", "created");
      } catch (error) {
        console.log("error", error.response);
        setLoading(false);
        Notification("error", error.message);
      }
    },
  });

  return (
    <Box>
      <Container maxWidth="md">
        <Box component="section">
          <Typography variant="h1">Register !</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="lastname"
              name="lastname"
              label="Lastname"
              variant="standard"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="standard"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="standard"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              variant="standard"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.password)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <ClipLoader loading={loading} />
            <Button
              disabled={loading}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
            <NotificationContainer />
          </form>
        </Box>
      </Container>
    </Box>
  );
}

export default RegisterScreen;
