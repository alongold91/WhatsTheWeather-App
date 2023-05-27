import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../global-styling/theme-api";
import Shell from "../views/shell/Shell";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Shell />
    </ThemeProvider>
  );
}

export default App;
