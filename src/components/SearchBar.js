import React from "react";
import Box from "@mui/material/Box";

import { makeStyles } from "@material-ui/core/styles";

import InputBase from "@mui/material/InputBase";
import "../App.css"; 

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  InputBase: {
    border: " 1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5),
    backgroundColor: "#f8f9fa",
    "&:hover": {
      border: " 1px solid transparent",
    },
  },
}));
function SearchBar() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {/* <TextField
        fullWidth
        label="Search Show"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          className: classes.textfield,
        }}
        InputLabelProps={{
          color: "success",
        }}
      /> */}

      <InputBase
        placeholder="Serach Show"
        fullWidth
        variant="outlined"
        className={classes.InputBase}
       
      />
    </Box>
  );
}

export default SearchBar;
