import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

//import { MyContext } from "../context/ShowContext";
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
  geners:{
    fontSize:"0.7rem",

  }
}));

function CardShowComponent({
  name,
  medium,
  summary,
  average,
  genres,
  id,
  maxCharecterCount = 60,
}) {
  //const { selectshow } = useContext(MyContext);
  const classes = useStyles();
  //stript html tag from summary
  //const text = summary.replace(/(<([^>]+)>)/gi, "");
  //const [istruncated, setIsTrancated] = useState(true);
  // const showTrancatedText = istruncated
  //   ? text.slice(0, maxCharecterCount) + "..."
  //   : text;

  // const toggleIsTruncated = () => {
  //   setIsTrancated(!istruncated);
  // };
  //whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}
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
                component="div"
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
              {/* <Typography variant="body2" color="text.secondary">
              {showTrancatedText}
            </Typography>

            <Typography variant="body2" color="text.secondary" gutterBottom>
              <span onClick={toggleIsTruncated} className={classes.readMore}>
                {istruncated ? "Read More" : "Read Less"}
              </span>
            </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <GetShow id={id}/> */}
      
    </Container>
  );
}

export default CardShowComponent;
