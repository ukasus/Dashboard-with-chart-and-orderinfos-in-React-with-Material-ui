import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data






export default function Orders(props) {

  var rows = props.order
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
