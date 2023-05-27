import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    box: {
      backgroundColor: theme.palette.primary.dark,
      flexGrow: 1,
      color: theme.palette.text.primary,
      
    },
    link: {
      textDecoration: "none",
    },
    spaceBetween: {
      justifyContent: "space-between"
    }
  };
});

const Header = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.box}>
      <AppBar position="static" >
        <Toolbar className={classes.spaceBetween}>
          <Link to="/" className={classes.link}>
            <Typography variant="h4" color="InfoText">
              Whats The Weather App
            </Typography>
          </Link>
          <Link to="/signup" className={classes.link}>
            <Typography variant="h5" color="InfoText">
              Sign up
            </Typography>
          </Link>
          <Link to="/checkbylocation" className={classes.link}>
            <Typography variant="h5" color="InfoText">
              Check temperature by location
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
