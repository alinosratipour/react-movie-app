import React, { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "../context/ShowContext";
import { EpisodeContext } from "../context/EpisodeContextProvider";
const useStyles = makeStyles((theme) => ({
  select: {
    border: "1px solid trasparent",
    backgroundColor: "#f8f9fa",
  },
}));
function EpisodeDropDown() {
  const classes = useStyles();
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
        {/* disableAnimation={true} shrink={false} */}
        <Select
          displayEmpty
          value={selectEpisode}
          onChange={handelEpidodeDropDown}
          {...getDisabled(!selectshow)}
          className={classes.select}
        >
          <MenuItem value="" disabled>
            <em> Select Episode</em>
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
