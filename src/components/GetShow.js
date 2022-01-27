import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MyContext } from "../context/ShowContext";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import ActorCard from "./ActorCard";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Header from "./Header";

import ImageThumbnail from "./ImageThumbnail";
function GetShow() {
  const { id } = useParams();

  const { listshow } = useContext(MyContext);
  const filtered = listshow.filter((item) => item.id === parseInt(id)); //filter show based on param ID
  //console.log(filtered);
  const [actor, setActor] = useState([]);

  useEffect(() => {
    // getting actors details
    async function getShowsCast() {
      const castUrl = `http://api.tvmaze.com/shows/${id}?embed=cast`;
      try {
        let resolve = await fetch(castUrl);
        let data = await resolve.json();
        console.log(data._embedded.cast);
        setActor(data._embedded.cast);
        return data._embedded.cast;
      } catch (error) {
        console.log(error);
      }
    }
    getShowsCast();
  }, [id]);

  return (
    <div style={{ background: "#6a040f" }}>
      <Header />

      <Container style={{ background: "#6a040f", paddingTop: "20px" }}>
        {filtered.forEach((item, index) => {
          const { id, name, summary, genres, image } = item;
          
          const text = summary.replace(/(<([^>]+)>)/gi, ""); //stript unwanted characters from summary
          const {
            image: { original },
            rating: { average },
          } = item;
          if (image !== null && text !== null) {
            return (
              <Grid
                container
                key={index}
                spacing={0}

                // spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
                // style={{ backgroundImage: `url(${original})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sm={12}
                  style={{ padding: "0px" }}
                >
                  <Box
                    component="img"
                    src={original}
                    alt="movie image."
                    width={"100%"}
                    height={"100%"}
                  ></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={6} sm={12} bgcolor={"#f48c06"}>
                  <Typography
                    variant={"h2"}
                    align={"center"}
                    gutterBottom={true}
                    fontWeight={"200"}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant={"body1"}
                    gutterBottom={true}
                    padding={"29px"}
                    align={"justify"}
                    style={{ textJustify: "distribute", wordSpacing: "-1px" }}
                  >
                    {text}
                  </Typography>

                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontWeight={"bold"}
                      variant={"h6"}
                      paddingRight={"10px"}
                      paddingLeft={"29px"}
                    >
                      Genres:
                    </Typography>
                    <Typography variant={"body2"} style={{ fontWeight: 300 }}>
                      {` ${genres}`}
                    </Typography>
                  </Box>

                  <Box
                    pt={2}
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      paddingBottom: "50px",
                    }}
                  >
                    <Typography
                      fontWeight={"bold"}
                      variant={"h6"}
                      paddingRight={"10px"}
                      paddingLeft={"29px"}
                    >
                      Rating:
                    </Typography>
                    <Typography
                      style={{
                        background: "black",
                        color: "white",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        lineHeight: "40px",
                        textAlign: "center",
                      }}
                    >{` ${average}`}</Typography>
                  </Box>
                  <Box style={{ textAlign: "center", paddingBottom: "20px" }}>
                    <Link to={`/episode/${id}`}>
                      <Button
                        variant="contained"
                        color="success"
                        style={{ width: "90%", background: "#000" }}
                      >
                        Episode
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            );
          }
        })}

        <Box
          style={{
            width: "100%",
            marginTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <Typography variant="h5" color="white" paddingBottom={"10px"}>
            Actors
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {actor.map((item, index) => {
              const {
                person: {
                  name,
                  //image: { medium },
                },
              } = item;

              let img = { ImageThumbnail };

              if (item.character.image !== null) {
                img = item.character.image.medium;
              } else {
                return (
                  <Grid
                    item
                    key={index}
                    xs={6}
                    md={2}
                    lg={2}
                    sm={6}
                   
                  >
                    <ImageThumbnail name={name} />
                  </Grid>
                );
              }

              return (
                <Grid
                  item
                  key={index}
                  xs={6}
                  md={2}
                  lg={2}
                  sm={6}
                
                >
                  <ActorCard name={name} image={img} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default GetShow;
