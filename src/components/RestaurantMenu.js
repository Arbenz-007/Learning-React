
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useReataurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, avgRating, totalRatingsString, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="menu-detail">
        <div className="menu-rating-cost">
          <h3>{avgRating} ({totalRatingsString})</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
        <h3>{cuisines.join(",")}</h3>
      </div>

      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
