import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "./CardShowComponent";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { MyContext } from "../context/ShowContext";

const useStyles = makeStyles({
  btn: {
    width: "50%",
    background: "#001219",
  },

  bg: {
    textAlign: "center",
    paddingBottom: "20px",
  },
});

function GetAllShow() {
  const { listshow, shoeMoreItems, visable } = useContext(MyContext);

  const classes = useStyles();
  

  return (
    <Container>
      <Grid container spacing={3}>
        {listshow.slice(0, visable).map((item) => {
          const { id, name,summary } = item;
          const {
            image: { medium }
            
          } = item;

          return (
            <Grid item key={id} xs={12} md={6} lg={3} sm={12}>
              <CardComponent name={name} medium={medium} summary={summary} />
            </Grid>
          );
        })}
        <Grid item lg={12} xs={12} md={12} className={classes.bg}>
          <Button
            className={classes.btn}
            onClick={shoeMoreItems}
            variant="contained"
            color="secondary"
          >
            Load More Movie
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GetAllShow;
