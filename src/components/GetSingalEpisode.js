import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Grid from "@mui/material/Grid";
import { MyContext } from "../context/ShowContext";

import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function GetSingalEpisode() {
  const { idd } = useParams();
  const [episode, setEpisode] = useState([]);
  const { selectshow } = useContext(MyContext);

  useEffect(() => {
    localStorage.setItem("showid", JSON.stringify(selectshow));

    const loadEpisode = async () => {
      try {
        let response = await fetch(
          `https://api.tvmaze.com/shows/${selectshow}/episodes`
        );
        const Data = await response.json();

        setEpisode(Data);
      } catch (err) {
        console.error(err.message);
      }
    };

    loadEpisode();
  }, [selectshow]);

  let positive_array = episode.filter(function (value) {
    return value.id === parseInt(idd);
  });

  return (
    <Layout>
      <Container style={{ padding: "30px" }}>
        {positive_array.map((item) => {
          const { name, id, image, summary } = item;

          //check if episode has image
          if (image !== null && summary !== null) {
            const text = summary.replace(/(<([^>]+)>)/gi, "");
            const {
              image: { original },
            } = item;
            return (
              <Grid style={{ display: "flex" }}>
                {/* <SingleEpisodeCard
                  id={id}
                  name={name}
                  medium={medium}
                  summary={summary}
                /> */}
                <Box
                  component="img"
                  src={original}
                  alt="movie image."
                  width={"500px"}
                  height={"400px"}
                ></Box>

                <Box bgcolor={"#f48c06"}>
                  <Typography
                    variant={"h3"}
                    align={"center"}
                    gutterBottom={true}
                    fontWeight={"200"}
                  >
                    {name}
                  </Typography>

                  <Typography padding={"20px"}>{text}</Typography>
                </Box>
              </Grid>
            );
          } else {
            return null;
          }
        })}
      </Container>
    </Layout>
  );
}

export default GetSingalEpisode;
