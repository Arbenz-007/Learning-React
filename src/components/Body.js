import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

import { useEffect, useState, useContext } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [SearchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //Whenever state variables update ,react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are Offline</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  //Conditional rendering

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter flex items-center flex-wrap gap-24 justify-center bg-[#f9fafb] ps-[30px]">
        <div className="search">
          <input
            type="text"
            className="search-box py-2 px-5 text-lg w-[400px] rounded-3xl mr-2 border-solid border-2 border-[#e5e7eb] "
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="py-3 px-5 text-[16px] font-bold bg-[#ff6f61] text-white border-none rounded-3xl cursor-pointer transtion duration-300 hover:bg-[#e6a50] hover:-translate-y-1"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // search text 

              const filteredRestaurant = ListOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn m-3 block cursor-pointer py-[10px] px-[20px] text-xl font-bold text-white bg-gradient-to-r from-[#ff6f61] to-[#f97316] border-none rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-md"
          onClick={() => {
            //filter logic
            const filteredList = ListOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            // console.log(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        {/* <div>
          <label htmlFor="name">UserName :</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>
      <div className="res-container px-[40px] bg-[#f9fafb] flex flex-wrap gap-5 items-center justify-around">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="custom-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* If the restaurant is promoted then add a promoted labal to it */}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
