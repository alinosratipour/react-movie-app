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
const useStyles = makeStyles({
  box: {
    background: "yellow",
  },
select:{
display:"none"
  
} 

});

export default function ButtonAppBar() {
  
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static" style={{ padding: 15 }}>
        <Toolbar>
          <Typography variant="h6" component="div" width="10%">
            Movie App
          </Typography>

          <ShowDropDown className={classes.formControl} />

          {/* {!selectshow ? (
            ""
          ) : (
            <EpisodeContextProvider>
              <EpisodeDropDown />
            </EpisodeContextProvider>
          )} */}
          <EpisodeContextProvider>
            <EpisodeDropDown />
          </EpisodeContextProvider>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
