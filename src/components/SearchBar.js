import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";


const useStyles = makeStyles({
  box: {
    width: "100%",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textfield: {
    width: "30%"
   
  },
  formControl: {
    background: "green",
    display: "none",
  },
});
function SearchBar() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      
      <TextField
        id="demo-helper-text-aligned"
        label="Search Show"
        color="secondary"
        className={classes.textfield}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;
