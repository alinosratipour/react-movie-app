import React, { useContext } from "react";
import { MyContext } from "../context/ShowContext";
import GetAllShow from "./GetAllShow";
import ShowEpisodes from "./ShowEpisodes";
import EpisodeContextProvider from "../context/EpisodeContextProvider";
import Layout from "./Layout";
import { useParams } from "react-router-dom";
function Home() {
  const { selectshow } = useContext(MyContext);
  const { id } = useParams();
  return (
    <Layout>
      {/* {!selectshow ? (
        <GetAllShow />
      ) : (
        <EpisodeContextProvider>
       
          <ShowEpisodes />
        </EpisodeContextProvider>
      )} */}

      {!id ? (
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
