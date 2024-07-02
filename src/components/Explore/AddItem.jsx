import { Grid, TextField } from '@mui/material'
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import {MenuItem} from '@mui/material';

const shipping = [
  {
    name: "online",
  },
  {
    name: "onffline",
  },
];

const AddItem = () => {
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

    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [sshipping,setShipping]=useState();
  return (
    <div sx={{ borderColor: "blue" }}>
      <Grid container lg={4} md={4} sm={4} padding={0}>
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
          }}
          lg={12}
        >
          <div>Add Item</div>
          {/* <div >Filter</div> */}
        </Grid>
        <Grid
          item
          style={{
            width: "500px",
          }}
        >
          <TextField
            id="outlined-select-currency"
            label="Item Name"
            // defaultValue="EUR"
            // helperText="Please select your currency"
            InputProps={{
              style: {
                // marginTop:"10px",
                borderRadius: "50px",
                width: "350px",
                height: "55px",
                // height: "55px",
                backgroundColor: "white",
              },
            }}
          ></TextField>

          <TextField
            id="outlined-select-currency"
            label="Item Price"
            // defaultValue="EUR"
            // helperText="Please select your currency"
            InputProps={{
              style: {
                // marginTop:"10px",
                borderRadius: "50px",
                // width: "350px",
                // height: "55px",
                backgroundColor: "white",
                width: "350px",
                height: "55px",
              },
            }}
          ></TextField>
          <TextField
            id="outlined-select-currency"
            label="Shipping Method"
            select
            InputProps={{
              style: {
                borderRadius: "50px",
                width: "350px",
                height: "55px",
                backgroundColor: "white",
              },
            }}
          >
            {shipping?.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
          <Grid
            item
            style={{
              borderRadius: "50px",
              width: "350px",
              height: "55px",
              backgroundColor: "green",
              color: "white",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: "130px",
            }}
          >
            Submit
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddItem