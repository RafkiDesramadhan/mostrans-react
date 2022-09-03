import axios from "axios";
import React, { useEffect, useState } from "react";
import LocationItem from "../../molecules/LocationItem";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Wave from "../Wave";

export default function LocationList() {
  const [location, setLocation] = useState([]);

  const getAPILocation = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    console.log(response.data.results);
    setLocation(response.data.results);
  };

  useEffect(() => {
    getAPILocation();
  }, []);
  return (
    <>
      <Navbar href="/location" />
      <div className="container">
        <h1>
          <i className="fa-solid fa-location-dot"></i> Location List
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">List Location</li>
          </ol>
        </nav>
        <div className="row">
          {location.map((item) => (
            <LocationItem
              key={item.id}
              name={item.name}
              type={item.type}
              dimension={item.dimension}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <Wave />
      <Footer />
    </>
  );
}
