import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import CardEpisodeComponent from './CardEpisodeComponent';
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
function EpisodeRoute() {
      const { id } = useParams();
  const [episode, setEpisode] = useState([]);
 

 useEffect(() => {
   const loadEpisode = async () => {
     try {
   
         let response = await fetch(
           `https://api.tvmaze.com/shows/${id}/episodes`
         );
         const Data = await response.json();
         setEpisode(Data);
       
     } catch (err) {
       console.error(err.message);
     }
   };

   loadEpisode();
 }, [id]);


    return (
      <Container >
        <Grid container spacing={3}>
          {episode.map((item) => {
            const { name, id, image,summary } = item;
             const text = summary.replace(/(<([^>]+)>)/gi, ""); //stript unwanted characters from summary
            //check if episode has image
            if (image !== null) {
              const {
                image: { medium },
              } = item;
              return (
                // <h1>{item.name}</h1>
                <Grid item key={id} xs={12} md={6} lg={3} sm={12}>
                  <CardEpisodeComponent id={id} name={name} medium={medium} summary={text} />
                </Grid>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      </Container>
    );
}

export default EpisodeRoute
