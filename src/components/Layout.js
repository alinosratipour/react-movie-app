import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Header from "./Header";
const useStyles = makeStyles({
  page: {
    background: "#6a040f",
    width: "100%",
    paddingTop: "80px",
  },
});

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <NavBar />

      <div className={classes.page}>{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
