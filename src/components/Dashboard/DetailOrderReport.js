import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(username, orderno, orderdate, status, totalamount, totalquantity, totalproductcount) {
  return { username, orderno, orderdate, status, totalamount, totalquantity, totalproductcount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44, 4555),

];





export default function DetailOrderReport(props) {

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Table size="small" border={1}>
        <TableHead border={1}>
          <TableRow>
            <TableCell >User Name</TableCell>
            <TableCell>Order No</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Total Qty</TableCell>
            <TableCell align='right'>Total Product Count</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.orderno}</TableCell>
              <TableCell>{row.orderdate}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.totalamount}</TableCell>
              <TableCell>{row.totalquantity}</TableCell>
              <TableCell align="right">{row.totalproductcount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </React.Fragment>
  );
}
