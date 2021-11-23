import React, { useContext } from "react";
import { EpisodeContext } from "../context/EpisodeContextProvider";
import CardEpisodeComponent from "./CardEpisodeComponent";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bg: {
    textAlign: "center",
    paddingBottom: "20px",
  },
});

function ShowEpisodes() {
  const { episode } = useContext(EpisodeContext);
  const classes = useStyles();
  return (
    <Container className={classes.bg}>
      <Grid container spacing={3}>
        {episode.map((item) => {
          const { name, id } = item;
          const {
            image: { medium },
          } = item;
          return (
            <Grid item key={id} xs={12} md={6} lg={3} sm={12}>
                <CardEpisodeComponent name={name} medium={medium} id={id}/>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ShowEpisodes;
