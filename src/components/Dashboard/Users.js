import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(username, totalamount, totalquantity, city) {
  return { username, totalamount, totalquantity, city };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS'),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK'),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA'),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN'),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch')
];





export default function Users(props) {

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Table size="small" border={1}>
        <TableHead border={1}>
          <TableRow>
            <TableCell >User Name</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Total Quantity</TableCell>
            <TableCell align='right'>City</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.totalamount}</TableCell>
              <TableCell>{row.totalquantity}</TableCell>

              <TableCell align="right">{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </React.Fragment>
  );
}
