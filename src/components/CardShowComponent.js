import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieHeading: {
    fontSize: "2rem",
    color: "black",
  },

  readMore: {
    color: "white",
    padding: "3px 6px",
    background: "black",
    display: "inline-block",
    marginTop: "8px",
  },
  geners: {
    fontSize: "0.7rem",
  },
}));

function CardShowComponent({ name, medium, average, genres }) {
  const classes = useStyles();

  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            alt="green iguana"
            image={medium}
          />
          <CardContent>
            <Typography
              gutterBottom
              style={{ textDecoration: "none" }}
              className={classes.movieHeading}
              variant="h6"
              fontWeight="bold"
            >
              {name}
            </Typography>
            <Typography> Rating: {average}</Typography>

            <Typography className={classes.geners} variant="body4">
              {`Genres: ${genres}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default CardShowComponent;
