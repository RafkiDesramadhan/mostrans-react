import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CharacterItem(props) {
  const { id, image, name, species, status, gender } = props;

  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="character" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Species : {species} <br />
            Status : {status} <br />
            Gender : {gender}
          </p>
          <Link to={`/detail/${id}`} className="btn btn-success">
            <i className="fa-solid fa-circle-info"></i> Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

CharacterItem.propTypes = {
  id: propTypes.number,
  image: propTypes.string,
  species: propTypes.string,
  status: propTypes.string,
  gender: propTypes.string,
};
