import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@mui/material/InputBase";
import "../App.css";
import { MyContext } from "../context/ShowContext";


const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  InputBase: {
    border: " 1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5),
    backgroundColor: "#f8f9fa",
    "&:hover": {
      border: " 1px solid transparent",
    },
  },
}));



function SearchBar() {
  const classes = useStyles();
  const { setInput } = useContext(MyContext);

//   const SearchShow = (e) => {
//     let result = e.target.value.toLowerCase();
// //const filtered =
//      console.log(result);

// // listshow.filter((show) => {
// //       const { name, summary, genres } = show;
// //       if (name !== null && summary !== null && genres !== null) {
// //         return (
// //           name.toLowerCase().includes(result) ||
// //           summary.toLowerCase().includes(result) ||
// //           genres.join(",").toLowerCase().includes(result)
// //         );
// //       }else{
// //         return <GetAllShow />;
// //       }
// //     }).map(item =>{
// //       return(
// //         <div>
// //           <p>{item.name}</p>
// //         </div>
// //       )
// //     });
   
// listshow.filter(show =>{
//   if(result == ""){
//       return <GetAllShow />;
//   }else if (show.name.toLowerCase().includes(result.toLowerCase())) {
//      return(
//       <GetAllShow/>
//      )  
//   }
// }).map(item =>{
// return (
//   <Layout>
//     <GetAllShow />
//   </Layout>
// );
// })
    
//   };

  return (
    <Box className={classes.box}>
   
      <InputBase
        placeholder="Serach Show"
        fullWidth
        variant="outlined"
        className={classes.InputBase}
        onChange={e =>setInput(e.target.value)}
      />
    </Box>
  );
}

export default SearchBar;
