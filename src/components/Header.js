import foodieImage from "../img/foodie.png"; // Import the image
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("header render");

  //if no dependency array  => useEffect is called on every render
  //if dependency array is empty= []=>useEffect is called on initial render only once
  //if dependency array is [btnReact ] => called every time btnREact is updated
  

  const onlineStatus=useOnlineStatus();

  const {loggedInUser}=useContext(UserContext);

  console.log(loggedInUser);
  return (
    <div className="h-32 flex justify-between items-center pr-5 bg-gray-800 border-solid border-b-2 border-red-400 ">
      <div className="logo-container">
        <Link to="/">
          <img className="w-52" src={foodieImage} alt="Foodie Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex gap-10 text-gray-50 items-center ">
          <li className="p-[10px] hover:text-[#ff6f61] cursor-pointer ">
            Online Status: {onlineStatus?"🟢":"🔴"}
          </li>
          <li className="p-[10px] ">
            <Link className="text-gray-50 hover:text-[#ff6f61] cursor-pointer " to="/">
              Home
            </Link>
          </li>
          <li className="p-[10px] ">
            <Link className="text-gray-50 hover:text-[#ff6f61] cursor-pointer " to="/about">
              About us
            </Link>
          </li>
          <li className="p-[10px] ">
            <Link className="text-gray-50 hover:text-[#ff6f61] cursor-pointer " to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="p-[10px]">
            <Link className="text-gray-50 hover:text-[#ff6f61] cursor-pointer " to="/grocery">
            Grocery
            </Link>
          </li>
          <li className="p-[10px] hover:text-[#ff6f61] cursor-pointer ">Cart</li>
          <button className="p-[10px] hover:text-[#ff6f61] cursor-pointer "
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className=" text-gray-50">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
