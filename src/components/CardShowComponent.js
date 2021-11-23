import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cards: {
    backgroundColor: "black",
    transition: "1s ease-out",
  },

  movieHeading: {
    fontSize: "8px",
    color:"black"
  
  
  },

  readMore: {
    color: "white",
    padding: "3px 6px",
    background: "black",
    display: "inline-block",
    marginTop: "8px",
  },
});

function CardShowComponent({ name, medium, summary, maxCharecterCount = 60 }) {
  const classes = useStyles();
  //stript html tag from summary
  const text = summary.replace(/(<([^>]+)>)/gi, "");
  const [istruncated, setIsTrancated] = useState(true);
  const showTrancatedText = istruncated
   ? text.slice(0, maxCharecterCount ) + "..."
    : text;

  const toggleIsTruncated = () => {
    setIsTrancated(!istruncated);
  };

  return (
    <Container>
      <Card className={classes.cards}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            alt="green iguana"
            image={medium}
          />
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              className={classes.movieHeading}
              variant="h6"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {showTrancatedText}
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom >
              <span onClick={toggleIsTruncated} className={classes.readMore}>
                {istruncated ? "Read More" : "Read Less"}
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default CardShowComponent;
