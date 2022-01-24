import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../img/movie.png";
import { MyContext } from "../context/ShowContext";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    margin: "auto",
    width: "90%",
  },
  tp: { color: "black", width: "20%" },

  box: {
    background: "white",
  },
  appbar: {
    padding: "10px",
  },
  logo: {
    maxWidth: "100px",
  },
}));

export default function ButtonAppBar() {
  const { handleClick } = useContext(MyContext);
  //const theme = useTheme();

  const classes = useStyles();
  return (
    <Box>
      <AppBar
        position="static"
        color="FooterAndHeader"
        className={classes.appbar}
      >
        <Toolbar className={classes.toolbar}>
          <Link to={`/`} onClick={handleClick}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
