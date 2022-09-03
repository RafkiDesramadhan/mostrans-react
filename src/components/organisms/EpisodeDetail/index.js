import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link, useParams } from "react-router-dom";
import EpisodeItem from "../../molecules/EpisodeItem";
import axios from "axios";

export default function EpisodeDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();

  const getAPIDetailEpisode = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getAPIDetailEpisode();
  }, []);
  return (
    <>
      <Navbar href="/episode" />
      <div className="container">
        <h1>Episode Detail</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link style={{ textDecoration: "none" }} to="/episode">
                Episode List
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Episode Detail
            </li>
          </ol>
        </nav>
        <div className="row d-flex justify-content-center">
          <EpisodeItem
            key={data.id}
            id={data.id}
            name={data.name}
            episode={data.episode}
            air_date={data.air_date}
            detail
          />
        </div>
      </div>
    </>
  );
}
