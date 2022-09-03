import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import cx from "classnames";

export default function Menu(props) {
  const { active, href, title } = props;
  const classNames = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item">
      <Link to={href} className={classNames}>
        {title}
      </Link>
    </li>
  );
}

Menu.propTypes = {
  active: propTypes.bool,
  title: propTypes.string,
  href: propTypes.string,
};
