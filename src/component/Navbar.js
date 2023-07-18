import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <a
          href="#"
          onClick={() => {
            navigate("/detail");
          }}
        >
          Frock.
        </a>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item active" data-link="#home">
          Home
        </li>
        <li className="navbar__menu__item" data-link="#about">
          About
        </li>
        <li className="navbar__menu__item" data-link="#skills">
          Skills
        </li>
        <li className="navbar__menu__item" data-link="#work">
          My work
        </li>
        <li className="navbar__menu__item" data-link="#contact">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
