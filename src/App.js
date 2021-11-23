import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShowContext from "./context/ShowContext";
import Home from "./components/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ae2012",
      },
      secondary: {
        main: "#511824",
      },
    },
  });

  return (
    <ShowContext>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ShowContext>
  );
}

export default App;
