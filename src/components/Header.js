import foodieImage from "../img/foodie.png"; // Import the image
import { useState , useEffect} from "react";
import {Link} from 'react-router-dom';

const Header = () => {

  const [ btnNameReact, setbtnNameReact ] = useState("Login");
  console.log("header render");

  //if no dependency array  => useEffect is called on every render
  //if dependency array is empty= []=>useEffect is called on initial render only once
  //if dependency array is [btnReact ] => called every time btnREact is updated
  useEffect(() => {
    console.log("useEffect called");
  },);




  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={foodieImage} alt="Foodie Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/home">Home</Link>
            </li>
          <li>
           <Link to="/about">About us</Link> 
            </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login" 
              ? setbtnNameReact("Logout")
              :setbtnNameReact("Login");
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
