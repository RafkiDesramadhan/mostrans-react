import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function LocationItem(props) {
  const { id, name, type, dimension, detail } = props;

  return (
    <div className="col-md-4 mt-4" key={id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Type : {type} <br />
            Dimension : {dimension}
          </p>
          {detail ? null : (
            <Link to={`/location-detail/${id}`} className="btn btn-success">
              <i className="fa-solid fa-circle-info"></i> Detail
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

LocationItem.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  type: propTypes.string,
  dimension: propTypes.string,
  detail: propTypes.bool,
};
