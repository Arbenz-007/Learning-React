import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

import useRestaurantMenu from "../utils/useReataurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy= "dummy data";

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, avgRating, totalRatingsString, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="menu text-center ">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>
      <div className="menu-detail">
        <div className="menu-rating-cost">
          <h3 className="font-bold">
            {avgRating} ({totalRatingsString})
          </h3>
          <h3 className="font-bold">{costForTwoMessage}</h3>
        </div>
        <p className="font-bold">{cuisines.join(",")}</p>
      </div>
      {/* categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index==showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
