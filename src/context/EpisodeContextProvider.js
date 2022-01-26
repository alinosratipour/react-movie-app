import { createContext, useState, useEffect, useContext } from "react";
import { MyContext } from "./ShowContext";
import { useNavigate } from "react-router";

export const EpisodeContext = createContext();

function EpisodeContextProvider(props) {
  const { selectshow } = useContext(MyContext);
  const [episode, setEpisode] = useState([]);
  const [selectEpisode, setSelecteEpisode] = useState("");
const navigate = useNavigate();
  //const url = ;

  useEffect(() => {
    const loadEpisode = async () => {
      try {
        if (!selectshow) {
        } else {
          let response = await fetch(
            `https://api.tvmaze.com/shows/${selectshow}/episodes`
          );
          const Data = await response.json();
          setEpisode(Data);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    loadEpisode();
  }, [selectshow]);

  const handelEpidodeDropDown = (e) => {
    
    setSelecteEpisode(e.target.value);
     navigate(`/singleepisode/${e.target.value}`);
     
  };



  const values = {
    selectshow,
    episode,
    handelEpidodeDropDown,
    selectEpisode,
  };
  return (
    <div>
      <EpisodeContext.Provider value={values}>
        {props.children}
      </EpisodeContext.Provider>
    </div>
  );
}
export default EpisodeContextProvider;
