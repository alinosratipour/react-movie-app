import React, { useContext } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { MyContext } from "../context/ShowContext";


function ShowDropDown() {
  const { listshow, selectshow, handelChange } = useContext(MyContext);
  // const classes = useStyle();




  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Select Show</InputLabel>
        <Select
          labelId="select-show"
          id="show"
          value={selectshow}
          onChange={handelChange}
          input={<OutlinedInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {listshow.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p>{selectshow }</p>
    </div>
  );
}

export default ShowDropDown;
