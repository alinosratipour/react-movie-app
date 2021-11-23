import React, { useContext } from "react";
import { MyContext } from "../context/ShowContext";
import GetAllShow from "./GetAllShow";
import ShowEpisodes from "./ShowEpisodes";
import EpisodeContextProvider from "../context/EpisodeContextProvider";
import Layout from "./Layout";

function Home() {
  const { selectshow } = useContext(MyContext);

  return (
    <Layout>
      {!selectshow ? (
        <GetAllShow />
      ) : (
        <EpisodeContextProvider>
          <ShowEpisodes />
        </EpisodeContextProvider>
      )}
    </Layout>
  );
}

export default Home;
