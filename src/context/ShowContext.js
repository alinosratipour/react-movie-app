import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
export const MyContext = createContext();

function ShowContext(props) {
  const [listshow, setListShow] = useState([]);
  const navigate = useNavigate();
  const [visable, setViable] = useState(8);
  const [selectshow, setSelectedShow] = useState(() => {
    // getting stored value
    const saved = sessionStorage.getItem("showid");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [input, setInput] = useState("");

  // load all show to dropdown menu

  const handleClick = () => {
    setSelectedShow("");
  };

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

  const SearchShow = (e) => {
    let result = e.target.value.toLowerCase();
    return result;
  };

  useEffect(() => {
    loadData();
  }, []);

  const shoeMoreItems = () => {
    setViable((prevValue) => prevValue + 8);
  };

  const handelChange = (e) => {
    setSelectedShow(e.target.value);
    navigate(`/episode/${e.target.value}`);
  };

  const values = {
    listshow,
    visable,
    loadData,
    shoeMoreItems,
    selectshow,
    handelChange,
    SearchShow,
    input,
    setInput,
    handleClick,
  };

  return (
    <div>
      <MyContext.Provider value={values}>{props.children}</MyContext.Provider>
    </div>
  );
}

export default ShowContext;
