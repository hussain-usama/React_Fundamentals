import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableComponent(props) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Timeline</TableCell>
              <TableCell align="right">Validity year</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data?.map((row,ind) => (
              <TableRow
                key={ind}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="right" >{row.id}</TableCell>
                <TableCell align="right">{row.timeLineText}</TableCell>
                <TableCell align="right">{row.validityYear}</TableCell>
                <TableCell align="right">{row.feeValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }