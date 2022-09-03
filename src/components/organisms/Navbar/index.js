import React from "react";
import Menu from "./Menu";
import propTypes from "prop-types";

export default function Navbar(props) {
  const { href } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark mb-4">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Menu title="Character" href="/" active={href === "/"} />
            <Menu
              title="Location"
              href="/location"
              active={href === "/location"}
            />
            <Menu
              title="Episode"
              href="/episode"
              active={href === "/episode"}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  href: propTypes.string,
};
