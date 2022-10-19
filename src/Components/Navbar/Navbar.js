import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navi = useNavigate();
  const login = () => {
    navi("/login");
  };

  const signup = () => {
    navi("/signup");
  };
  const addvenue = () => {
    navi("/users/addvenues");
  };

  return (
    <nav className="Ncontainer">
      <span id="logo">
        <Link to="/">
          <img
            id="logoT"
            src={require("./myworld-logos/myworld-logos.jpeg")}
            alt="logo"
          />
        </Link>
      </span>

      <span id="options">
        <ul>
          <li>
            <Link to="/">
              <span>//</span> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <span>//</span> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>//</span> Contact Us
            </Link>
          </li>

          <li>
            <Link to="/venues">
              <span>//</span> Venues
            </Link>
          </li>
        </ul>
      </span>

      <span className="Buttons">
        <button onClick={login}>Login</button>
        <button onClick={signup}>Sign Up</button>
        <button onClick={addvenue}>AddVenue</button>
      </span>
    </nav>
  );
}

// export default Navbar;
