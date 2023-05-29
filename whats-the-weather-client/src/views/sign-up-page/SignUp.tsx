import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikTextField from "../../common-components/formik-form-components/text-field/FormikTextField";
import PrimaryButton from "../../common-components/buttons/PrimaryButton";
import { makeStyles } from "tss-react/mui";
import { useGetUsersQuery } from "../../global-state/rtk/rtk-query/api-slices/users-ap-slice/UsersApiSlice";



const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  city: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("This is a required field"),
  lastName: Yup.string().required("This is a required field"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This is a required field since you need it as a last name"),
  password: Yup.string().required("This is a required field"),
  country: Yup.string(),
  city: Yup.string(),
  longitude: Yup.number(),
  latitude: Yup.number(),
  // Not to forget to verify that either a country or a longitude and latitude is filled
});

const useStyles = makeStyles()((theme) => {
  return {
    primaryBtn: {
      width: "100%"      
    },

  };
});

const SignUp = () => {
  const { data: users, error, isLoading } = useGetUsersQuery({});
  console.log(users);
  const { classes } = useStyles();
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormikTextField
                label="First Name"
                name="firstName"
              />
            </Grid>
            <Grid item xs={6}>
              <FormikTextField
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                label="Email"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                label="Choose Password"
                name="password"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <PrimaryButton onClick={()=>{}} label="Submit" extraClasses={classes.primaryBtn} />  
          </Grid>
        </Form>
      </Formik>
 
    </Container>
  );
};

export default SignUp;
