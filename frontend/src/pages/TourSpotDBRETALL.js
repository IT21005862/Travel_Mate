//IT21013300
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TourSpothomeUI from "../components/TourSpotALlUI";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import "../css/Tourspothome.css";
import Carousel from 'react-bootstrap/Carousel';

//IT21013300

// Retriev all tour spots
const TourSpotDBRETALL = () => {   //This function displays all tour spots

    //Use of react hooks
const [tourspot, setTourSpot] = useState([]);
const [searchTerm, setSearchTerm] = useState("")
const user = useSelector((state) => state.user);
const navigate = useNavigate();


  const fetchDetails = async () => {
    const res = await axios
    .get(`https://travel-mate.onrender.com/tourspot/getalltourspot`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log("tour2",data);
    return data;
    
  };

  useEffect(() => {
    fetchDetails().then((data) => setTourSpot(data.tourspots));
  }, []);
 console.log("T", tourspot);

  
 



const tourspotsearch = tourspot.filter((tourspots) => tourspots.title.toLowerCase().includes(searchTerm.toLowerCase())||tourspots.Address.toLowerCase().includes(searchTerm.toLowerCase())||tourspots.Address1.toLowerCase().includes(searchTerm.toLowerCase()) );
  console.log("search",tourspotsearch)
  return (
    <div>
       
      <div className="filters-container d-flex justify-content-center pt-4 pb-4">
        <TextField id="outlined-basic" label="Search" variant="outlined" type="search"   onChange={(e) => setSearchTerm(e.target.value)} InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}/>
      </div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1548928309116-4HW0AM7SDXMALNUWYO1C/The_Common_Wanderer_best_things_to_do_Sri_Lanka-22.jpg?format=1000w"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tour Spot</h3>
          <p>Travellers Choice🌍</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://awayandfar.com/wp-content/uploads/2019/01/Nuwara-Eliya.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Tour Spot</h3>
          <p>Travellers Choice🌍</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Ampara.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Tour Spot</h3>
          <p>Travellers Choice🌍</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {tourspot.length === 0 ? (
        <h1>No tourspot yet<br/></h1>
      ) : tourspotsearch.length === 0 ? (
        <h1>No tourspot found<br/></h1>
      ) : (
        <div className="row">
          {tourspotsearch.map((tourspots, index) => (
            <div key={tourspots._id} >
              <TourSpothomeUI
                id={tourspots._id}
                isUser={localStorage.getItem("userId") === tourspots.user}
                title={tourspots.title}
                description={tourspots.description}
                image={tourspots.image}
                image1={tourspots.image1}
                price={tourspots.price}
                NoTickets={tourspots.NoTickets}
                Address={tourspots.Address}
                Address1={tourspots.Address1}
                username={tourspots.user.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TourSpotDBRETALL;



