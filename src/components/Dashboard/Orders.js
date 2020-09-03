import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();
  var rows=props.order
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Table size="small" border={1}>
        <TableHead border={1}>
          <TableRow>
            <TableCell >Order No</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Total Quantity</TableCell>
            <TableCell align='right'>UserName</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell>{row.orderno}</TableCell>
              <TableCell>{row.totalamount}</TableCell>
              <TableCell>{row.totalquantity}</TableCell>
              
              <TableCell align="right">{row.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}
