import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import TableDetailCharacter from "../../molecules/TableDetailCharacter";
import Navbar from "../Navbar";

export default function CharacterDetail() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  const { id } = useParams();

  const getAPIDetailCharacter = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setData(response.data);
    setLocation(response.data.location);
  };

  useEffect(() => {
    getAPIDetailCharacter();
  }, []);

  return (
    <>
      <Navbar href="/" />
      <div className="container">
        <h1>Character Detail</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link style={{ textDecoration: "none" }} to="/">
                Character List
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Character Detail
            </li>
          </ol>
        </nav>
        <TableDetailCharacter
          image={data.image}
          name={data.name}
          gender={data.gender}
          species={data.species}
          status={data.status}
          type={data.type}
          created={data.created}
          locationName={location.name}
        />
      </div>
    </>
  );
}
