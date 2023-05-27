import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3498DB",
      dark: "#2E86C1",
      light: "#3db3e3",
    },
    secondary: {
      main: "#273746",
      dark: "#212F3D",
      light: "#2C3E50",
    },
    success: {
      main: "#28B463",
      light: "#2ECC71",
      dark: "#239B56",
    },
    background: {
      default:"#F4F6F7",
      paper: "#E9E1F5",
    },
    text: {
      primary: "#4A235A",
      secondary: " #FFDEAD",
      disabled: "#CACFD2",
    },
    warning : {
      main: "#CB4335",
      light: "#E74C3C",
      dark: "#B03A2E"
    },
    error: {
      main: "#C0392B",
      light: "#CD6155",
      dark: "#A93226"
    },
    divider: "#273746",
  },
  typography: {
    fontFamily: `"Merriweather", "sans-serif"`,
    h1: {
      fontSize: "2.5rem"
    },
    h2: {
      fontSize: "2rem"
    },
    h3: {
      fontSize: "1.5rem"
    },
    h4: {
      fontSize: "1.25rem"
    },
    h5: {
      fontSize: "1rem"
    },
    h6: {
      fontSize: "0.75rem"
    },
  }
});
