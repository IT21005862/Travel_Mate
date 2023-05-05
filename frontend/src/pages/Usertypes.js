//IT21013300
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from '@mui/icons-material/Done';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

function Usertypes() {

  const [sellers, setSellers] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [travels, setTravels] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const user = useSelector((state) => state.user);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({  //MUI tables styles
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({  //MUI tables styles
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

       //Approval of destination
   const handleDestination = async (destinations) => {
    try {
      const response = await axios.put(`http://localhost:8070/users/approveDest/${user._id}`, {
        isDest: true
      });
      // Update the destinations state with the updated destinations object
      setDestinations(prevdestination => prevdestination.map(s => s._id === destinations._id ? {...s, isDest: true} : s));
    } catch (error) {
      console.error(error);
    }
  };

     //Approval of sellers
     const handleseller = async (sellers) => {
        try {
          const response = await axios.put(`http://localhost:8070/users/approveseller/${user._id}`, {
            isSeller: true
          });
          // Update the sellers state with the updated seller object
          setSellers(prevSellers => prevSellers.map(s => s._id === sellers._id ? {...s, isSeller: true} : s));
        } catch (error) {
          console.error(error);
        }
      };

         //Approval of Hotel
   const handleHotel = async (hotels) => {
    try {
      const response = await axios.put(`http://localhost:8070/users/approvehotel/${user._id}`, {
        isHotel: true
      });
      // Update the sellers state with the updated seller object
      setHotels(prevHotels => prevHotels.map(s => s._id === hotels._id ? {...s, isHotel: true} : s));
    } catch (error) {
      console.error(error);
    }
  };

     //Approval of Travel
     const handleTravel = async (travels) => {
        try {
          const response = await axios.put(`http://localhost:8070/users/approvetrav/${user._id}`, {
            isTravel: true
          });
          // Update the sellers state with the updated seller object
          setTravels(prevTravels => prevTravels.map(s => s._id === travels._id ? {...s, isTravel: true} : s));
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Type (Sovenier||Hotel||Travel||Destination)</StyledTableCell>
            <StyledTableCell align="center">Selcect one only</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        <StyledTableRow>
              <StyledTableCell>
              Destination
              </StyledTableCell>
              <Button variant="contained"  onClick={() => handleDestination(destinations)} color="success" startIcon={<DoneIcon />} >YES</Button>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Hotel
              </StyledTableCell>
              <Button variant="contained"  onClick={() => handleHotel(hotels)} color="success" startIcon={<DoneIcon />} >YES</Button>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Travel
              </StyledTableCell>
              <Button variant="contained"  onClick={() => handleTravel(travels)} color="success" startIcon={<DoneIcon />} >YES</Button>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell>
              Sovenier
              </StyledTableCell>
              <Button variant="contained"  onClick={() => handleseller(sellers)} color="success" startIcon={<DoneIcon />} >YES</Button>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Usertypes
