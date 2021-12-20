import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "./SearchBar";

import { makeStyles } from "@material-ui/core/styles";
import EpisodeDropDown from "./EpisodeDropDown";
import ShowDropDown from "./ShowDropDown";
import EpisodeContextProvider from "../context/EpisodeContextProvider";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
    padding: "20px",
  },
}));

export default function ButtonAppBar() {
  const theme = useTheme();


  const classes = useStyles();
  return (
    <Box>
      <AppBar
        position="static"
        color="FooterAndHeader"
        className={classes.appbar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" component="div" className={classes.tp}>
            Movie App
          </Typography>

       
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
