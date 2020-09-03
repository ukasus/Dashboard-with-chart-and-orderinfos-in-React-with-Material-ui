import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function AltCard(props) {

  return (
      <div style={{backgroundColor:"lightblue",
      color:"black"}}>
    <Typography component="h2" variant="h6" color="black" gutterBottom >
      {props.up}-{props.to}
      
    </Typography>
    <Typography component="h2" variant="h6" color="black" gutterBottom>
    {props.dp}-{props.wo}
    
   </Typography>
   </div>
    
  );
}