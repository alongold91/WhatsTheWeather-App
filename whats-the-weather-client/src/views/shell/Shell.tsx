import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../home-page/Home";
import { makeStyles } from "tss-react/mui";
import Header from "../../navigation/navigation-menu/Header";
import CheckTemperatureView from "../check-temperature-by-city/CheckTemperatureView";
import SignUp from "../sign-up-page/SignUp";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100vh",
      color: theme.palette.text.primary,
    },
  };
});

const Shell = () => {
  const { classes } = useStyles();
  return (
    <main className={classes.root}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkbylocation"
          element={
           <CheckTemperatureView />
          }
        />
        <Route
          path="/signup"
          element={
           <SignUp/>
          }
        />
      </Routes>
    </main>
  );
};

export default Shell;
