import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function TableDetailCharacter(props) {
  const { image, name, gender, species, status, type, created, locationName } =
    props;
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <img src={image} className="img-fluid img-thumbnail" alt="character" />
        <table className="table table-striped mt-4">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th>Species</th>
              <td>{species}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{status}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{type === "" ? "-" : type}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{created}</td>
            </tr>
            <tr>
              <th>Location Name</th>
              <td>
                <button
                  type="button"
                  className="btn btn-success btn-sm"
                  disabled
                >
                  <i className="fa-solid fa-location-dot"></i> {locationName}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

TableDetailCharacter.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  gender: propTypes.string,
  species: propTypes.string,
  status: propTypes.string,
  type: propTypes.string,
  created: propTypes.string,
  location: propTypes.string,
};
