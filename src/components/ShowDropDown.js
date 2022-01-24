import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MyContext } from "../context/ShowContext";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  select: {
    border: "1px solid trasparent",
    backgroundColor: "#f8f9fa",
  },
}));

function ShowDropDown() {
  const classes = useStyles();

  const { listshow, selectshow, handelChange, personName } =
    useContext(MyContext);

  // Sort All Shows Alphabeticlly
  const sorted = listshow.sort(function (show1, show2) {
    return show1.name.localeCompare(show2.name);
  });

  return (
    <Box>
      <FormControl sx={{ m: 0, width: 300 }}>
        {/* disableAnimation={true} shrink={false} */}
        <Select
          displayEmpty
          className={classes.select}
          value={selectshow}
          onChange={handelChange}
        >
          <MenuItem value="" disabled>
            <em>Select Show</em>
          </MenuItem>

          {sorted.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default ShowDropDown;
