import foodieImage from "../img/foodie.png"; // Import the image
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header render");

  //if no dependency array  => useEffect is called on every render
  //if dependency array is empty= []=>useEffect is called on initial render only once
  //if dependency array is [btnReact ] => called every time btnREact is updated
  

  const onlineStatus=useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={foodieImage} alt="Foodie Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus?"🟢":"🔴"}
          </li>
          <li>
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/about">
              About us
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/grocery">
            Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
