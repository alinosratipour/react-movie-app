import React, { useContext } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { MyContext } from "../context/ShowContext";
import { EpisodeContext } from "../context/EpisodeContextProvider";

function EpisodeDropDown() {
  const { selectEpisode, episode, handelEpidodeDropDown } =
    useContext(EpisodeContext);
  const { selectshow } = useContext(MyContext);

  const getDisabled = (val) => {
    if (val) return { disabled: true };
    return {};
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Select Episode</InputLabel>
        <Select
          labelId="select-show"
          id="show"
          value={selectEpisode}
          onChange={handelEpidodeDropDown}
          {...getDisabled(!selectshow)}
          input={<OutlinedInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {episode.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default EpisodeDropDown;
