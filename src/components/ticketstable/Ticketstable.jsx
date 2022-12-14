import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from 'react';
import axios from "axios";
import Select from 'react-select';



export default function BasicTable() {

  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1337/api/tickets').then((response)=>{setRows(response.data)})
  }, [])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
     
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const options = [
    { value: 'opened', label: 'open' },
    { value: 'closed', label: 'closed' },
    { value: 'pending', label: 'pending' },
  ]
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">User Type</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Issue</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fName}
              </TableCell>
              <TableCell align="left">{row.lName}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.userType}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.issue}</TableCell>
              <TableCell align="left"><Select
                    
                    defaultValue={row.status}
                    onChange={(e)=>axios.put(`http://localhost:1337/api/tickets/changeStatus/${row._id}`, {status: e.value}).then(window.location.reload(true))}
                    options={options} />
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
