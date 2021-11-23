import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  page: {
    background: "#9b2226",
    width: "100%",
    paddingTop: "80px",
  },
});

function Layout({ children }) {
 
  const classes = useStyles();
  return (
    <div>
      <NavBar/>
      

      <div className={classes.page}>{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
