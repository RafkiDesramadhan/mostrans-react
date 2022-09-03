import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import CharacterItem from "../../molecules/CharacterItem";
import Navbar from "../Navbar";
import Wave from "../Wave";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  const getAPICharacter = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setCharacter(response.data.results);
  };

  useEffect(() => {
    getAPICharacter();
  }, []);

  return (
    <>
      <Navbar href="/" />
      <div className="container">
        <h1>
          <i className="fa-solid fa-person"></i> Character List
        </h1>
        <nav aria-label="breadcrumb text-end">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Character List
            </li>
          </ol>
        </nav>
        <div className="row">
          {character.map((item) => (
            <CharacterItem
              key={item.id}
              name={item.name}
              image={item.image}
              species={item.species}
              status={item.status}
              gender={item.gender}
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
