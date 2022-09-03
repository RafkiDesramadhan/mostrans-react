import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function EpisodeItem(props) {
  const { id, name, episode, air_date, detail } = props;
  return (
    <div className="col-md-4 mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Episode : {episode} <br />
            Air Date : {air_date}
          </p>
          {detail ? null : (
            <Link to={`/episode-detail/${id}`} className="btn btn-success">
              <i className="fa-solid fa-circle-info"></i> Detail
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

EpisodeItem.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  episode: propTypes.string,
  air_date: propTypes.string,
  detail: propTypes.bool,
};
