import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LocationItem from "../../molecules/LocationItem";
import Navbar from "../Navbar";

export default function LocationDetail() {
  const [data, setData] = useState({});

  const { id } = useParams();

  const getAPIDetailLocation = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location/${id}`
    );
    setData(response.data);
  };

  useEffect(() => {
    getAPIDetailLocation();
  }, []);
  return (
    <>
      <Navbar href="/location" />
      <div className="container">
        <h1>Location Detail</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link style={{ textDecoration: "none" }} to="/location">
                Location List
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Location Detail
            </li>
          </ol>
        </nav>
        <div className="row d-flex justify-content-center">
          <LocationItem
            key={data.id}
            name={data.name}
            type={data.type}
            dimension={data.dimension}
            detail
          />
        </div>
      </div>
    </>
  );
}
