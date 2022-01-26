import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import CardShowComponent from "./CardShowComponent";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "../context/ShowContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  loadmoreBtn: {
    width: "40%",
    color: "red",

    "&:hover": {
      backgroundColor: "#ffba08",
      color: "#000",
    },
  },
  bg: {
    textAlign: "center",
    paddingBottom: "20px",
  },
  container: {
    width: "90%",
    margin: "auto",
    
  },
}));

function GetAllShow() {
  const { listshow, shoeMoreItems, visable,  input } =
    useContext(MyContext);

  const classes = useStyles();

  return (
    <div className={classes.container}  >
      <Grid container spacing={3}>
        {listshow
          .filter((val) => {
            if (input == "") {
              //return all show
              return val;
            } else if (val.name.toLowerCase().includes(input.toLowerCase())) {
              return val;
            }
          })
          .slice(0, visable)
          .map((item) => {
            const { id, name, summary, genres } = item;
            const {
              image: { medium },
              rating: { average },
            } = item;

            return (
              <Grid item key={id} xs={12} md={6} lg={3} sm={12}>
                <Link to={`/show/${id}`} style={{ textDecoration: "none" }}  >
                  <CardShowComponent
                    id={id}
                    name={name}
                    medium={medium}
                    summary={summary}
                    average={average}
                    genres={genres}
                  />
                </Link>
              </Grid>
            );
          })}
        <Grid item lg={12} xs={12} md={12} className={classes.bg}>
          <Button
            classes={{
              root: classes.loadmoreBtn,
            }}
            onClick={shoeMoreItems}
            variant="contained"
            color="loadMore"
          >
            Load More Movie
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default GetAllShow;
