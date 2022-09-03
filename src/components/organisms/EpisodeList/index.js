import axios from "axios";
import React, { useEffect, useState } from "react";
import EpisodeItem from "../../molecules/EpisodeItem";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Wave from "../Wave";

export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  const getAPIEpisode = async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/episode");
    console.log(response.data.results);
    setEpisode(response.data.results);
  };

  useEffect(() => {
    getAPIEpisode();
  }, []);

  return (
    <>
      <Navbar href="/episode" />
      <div className="container">
        <h1>
          <i className="fa-solid fa-list"></i> Episode List
        </h1>
        <nav aria-label="breadcrumb text-end">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Episode List
            </li>
          </ol>
        </nav>
        <div className="row">
          {episode.map((item) => (
            <EpisodeItem
              key={item.id}
              id={item.id}
              name={item.name}
              episode={item.episode}
              air_date={item.air_date}
            />
          ))}
        </div>
      </div>
      <Wave />
      <Footer />
    </>
  );
}
