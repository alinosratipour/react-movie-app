import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieHeading: {
    fontSize: "1rem",
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

export default function SingleEpisodeCard({
  name,
  medium,
  id,
  summary,
  maxCharecterCount = 60,
}) {
  const classes = useStyles();
  const [istruncated, setIsTrancated] = useState(true);
  const text = summary.replace(/(<([^>]+)>)/gi, "");
  const showTrancatedText = istruncated
    ? text.slice(0, maxCharecterCount) + "..."
    : text;

  const toggleIsTruncated = () => {
    setIsTrancated(!istruncated);
  };

  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={medium}
            alt="green iguana"
            classes={{ root: classes.card }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
              {id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {showTrancatedText}
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
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
