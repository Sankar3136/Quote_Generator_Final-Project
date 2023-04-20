import React from 'react'
import {Grid} from '@mui/material';
function Footer() {
  return (
    <div style={{backgroundColor:"#E0FFFF", marginTop:"-2%", paddingLeft:"2%"}}>
        <hr style={{ color:"black"}}/>
          <Grid item><p style={{fontSize:"xx-large", paddingBottom:"0.7%", marginBottom:"-0.07%", marginRight:"10%"}}>Quotes Generator</p></Grid>
          <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>All Right Reserved</p> </Grid>
          </Grid>
          <Grid container spacing={5}style={{marginRight:"8%"}}>
          <Grid item><p>Terms of Service</p></Grid>
          <Grid item><p>Privacy</p></Grid>
          <Grid item><p>India(English)</p></Grid>
          <Grid item><p>Contact : 1234567890</p></Grid>
          <Grid item><p>Email : 727721euec130@skcet.ac.in</p></Grid>
        </Grid>
    </div>
  )
}

export default Footer