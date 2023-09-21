import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShowContext from "./context/ShowContext";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetShow from "./components/GetShow";
import EpisodeRoute from "./components/EpisodeRoute";
import GetSingalEpisode from "./components/GetSingalEpisode";
function App() {
  const theme = createTheme({
    palette: {
      cust: {
        main: "red",
      },
      loadMore: {
        main: "#03071e",
        contrastText: "#fff",
      },
      episode: {
        main: "black",
      },

      FooterAndHeader: {
        main: "#ffba08",
      },
      headerColor: {
        main: "#000",
      },
    },
  });

  return (
    <Router>
      <ShowContext>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/show/:id" element={<GetShow />} />
            <Route path="/episode/:id" element={<EpisodeRoute />} />

            <Route path="/singleepisode/:idd" element={<GetSingalEpisode />} />
          </Routes>
        </ThemeProvider>
      </ShowContext>
    </Router>
  );
}

export default App;
