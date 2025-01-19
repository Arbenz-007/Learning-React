
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-img"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <div className="rate-deli">
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
        <p>{cuisines.join(", ")}</p>
      </div>
    );
  };

  export default RestaurantCard;