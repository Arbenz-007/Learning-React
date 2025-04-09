import foodieImage from "../img/foodie.png"; // Import the image
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/fireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  // console.log("header render");

  //if no dependency array  => useEffect is called on every render
  //if dependency array is empty= []=>useEffect is called on initial render only once
  //if dependency array is [btnReact ] => called every time btnREact is updated

  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedInUser } = useContext(UserContext);

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const name = useSelector((store)=>store.user);

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubsribe();
  }, []);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(loggedInUser);
  console.log(cartItems);
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
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-[10px] ">
            <Link
              className="text-gray-50 hover:text-[#ff6f61] cursor-pointer "
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="p-[10px] ">
            <Link
              className="text-gray-50 hover:text-[#ff6f61] cursor-pointer "
              to="/about"
            >
              About us
            </Link>
          </li>
          <li className="p-[10px] ">
            <Link
              className="text-gray-50 hover:text-[#ff6f61] cursor-pointer "
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li className="p-[10px]">
            <Link
              className="text-gray-50 hover:text-[#ff6f61] cursor-pointer "
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li className="p-[10px] hover:text-[#ff6f61] cursor-pointer ">
            <Link
              className="text-gray-50 hover:text-[#ff6f61] cursor-pointer "
              to="/cart"
            >
              Cart -({cartItems.length} items)
            </Link>
          </li>
          <button
            className="p-[10px] hover:text-[#ff6f61] cursor-pointer "
            onClick={handleSignOutClick}
          >
            Sign out
          </button>
          <li className=" text-gray-50">{name?.displayName ? `Hello, ${name.displayName}` : "Guest"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
