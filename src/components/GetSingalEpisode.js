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
      localStorage.setItem('showid', JSON.stringify(selectshow))
    
    
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
      {/* {!selectshow ? (
       
      ) : (
        <div>ali</div>
      )} */}

      <Container style={{ padding: "30px" }}>
        Episode{idd}
        selectshow{selectshow}
        {/* 
        <p></p>
         */}
        {positive_array.map((item) => {
          const { name, id, image, summary } = item;

          //check if episode has image
          if (image !== null) {
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
                  width={"50%"}
                  height={"100%"}
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

                  <div>{summary}</div>
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
