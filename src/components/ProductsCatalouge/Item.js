import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


export default function Item(props) {
  function sendtodatabase(e) {
    //use this function to add the selected product to the account of the user in the database in backend
  }

  return (
    <div>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.productname}
      </Typography>
      <Button variant="contained" color="secondary" onclick={sendtodatabase}>
        Add to cart
    </Button>
    </div>

  );
}
