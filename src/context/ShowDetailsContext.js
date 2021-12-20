import { createContext, useState, useEffect, useContext } from "react";
import { MyContext } from "./ShowContext";
export const FullShowDetailsContext = createContext();

function EpisodeContextProvider(props) {
  const { selectshow } = useContext(MyContext);
  const [showDetails, setShowDetails] = useState([]);
  //const [selectEpisode, setSelecteEpisode] = useState("");

  //const url = ;

  useEffect(() => {
    const loadShowDetails = async () => {
      try {
        if (!selectshow) {
        } else {
          let response = await fetch(
            `https://api.tvmaze.com/shows/${selectshow}`
          );
          const Data = await response.json();
          setShowDetails(Data);
         
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    loadShowDetails();
  }, [selectshow]);

 

  const values = {
    selectshow,
    showDetails
  };
  return (
    <div>
      <FullShowDetailsContext.Provider value={values}>
        {props.children}
      </FullShowDetailsContext.Provider>
    </div>
  );
}
export default EpisodeContextProvider;
