import { createContext, useState, useEffect } from "react";
export const MyContext = createContext();
export const EpisodeContext = createContext()
function ShowContext(props) {
  const [listshow, setListShow] = useState([]);
  const [visable, setViable] = useState(8);
  const [selectshow, setSelectedShow] = useState("");
  
  // load all show to dropdown menu
  


 const loadData = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows`);
      const Data = await response.json();
      setListShow(Data);
      //console.log(Data);
    } catch (err) {
      console.error(err.message);
    }
  };
  



// const url = `https://api.tvmaze.com/shows/${selectshow}/episodes`;
// const loadEpisode = async () => {
//   try {
//     let response = await fetch(url);
//     const Data = await response.json();
//     setEpisode(Data);
//     console.log(Data);
//   } catch (err) {
//     console.error(err.message);
//   }
// };

useEffect(() => {
  loadData();
  //loadEpisode();
}, []);



  const shoeMoreItems = () => {
    setViable((prevValue) => prevValue + 8);
  };

  const handelChange = (e) => {
    setSelectedShow(e.target.value);
  };

 

  const values = {
    listshow,
    visable,
    loadData,
    shoeMoreItems,
    selectshow,
    handelChange
   
    // loadEpisodes,
    // episode
  };

  
  return (
    <div>
      <MyContext.Provider value={values}>{props.children}</MyContext.Provider>
     
        
     
    </div>
  );
}

export default ShowContext;
