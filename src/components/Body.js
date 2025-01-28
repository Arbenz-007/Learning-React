import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - Super Powerful Variable
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [SearchText, setSearchText] = useState("");

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
  if(onlineStatus=== false) return <h1>Looks like you are Offline</h1>

  //Conditional rendering

  return ListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
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
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link className="custom-link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
