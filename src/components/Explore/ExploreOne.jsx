import React, { useEffect } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { URL } from '../../config/apifetch';


// or
import { CardHeader, Grid, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import ItemCard from './ItemCard';



const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const ExploreOne = () => {
 let data;
    const call = async()=>{
    const resdata = await axios.get(
      "https://run.mocky.io/v3/484a4684-87a9-462b-9cf0-25bc33c6fa1a"
    );
    data = resdata.data;
      console.log(data);

    
    }
    useEffect( () => {
     call();
    });


  return (
    // <div sx={{ borderColor: "black", borderWidth: "5px" }}>
    //   <Grid container lg={4} sx={{ borderColor: "black" }}>
    //     <div className="rounded-2xl flex-row bg-inherit">
    //       Explore
    //       <TextField
    //         id="outlined-select-currency"
    //         select
    //         label="Search"
    //         // defaultValue="EUR"
    //         // helperText="Please select your currency"
    //         InputProps={{
    //           style: {
    //             borderRadius: "50px",
    //             width: "350px",
    //             height: "55px",
    //           },
    //         }}
    //       >
    //         {data?.map((option) => (
    //           <MenuItem key={option.item} value={option.item}>
    //             {option.item}
    //           </MenuItem>
    //         ))}
    //       </TextField>
    //     </div>
    //   </Grid>

    //   <div></div>
    // </div>

    <div sx={{ borderColor: "blue" }}>
      <Grid container lg={4} padding={0}>
        <Grid
          item
          style={{
            backgroundColor: "gray",
            width: "100%",
            height: "143px",
            paddingTop: "60px",
            paddingLeft: "60px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            display: "flex-row",
          }}
        >
          <div>Explore</div>

          <TextField
            id="outlined-select-currency"
            label="Search"
            select
            // defaultValue="EUR"
            // helperText="Please select your currency"
            // InputProps={{
            //   style: {
            //     // marginTop:"10px",
               
            //   },
            // }}
            InputProps={{
             style: {
                borderRadius: "50px",
                width: "350px",
                height: "55px",
                backgroundColor:"white"
             },
            }}
          >
            {data?.map((option) => (
              <MenuItem key={option.item} value={option.item}>
                {option.createdAt}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item> <ItemCard/></Grid>
      </Grid>
    </div>
  );

}

export default ExploreOne
