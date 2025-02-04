
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
  
    return (
      <div className="res-card p-1 w-[280px] h-[350px] overflow-hidden text-[#1f2937] border-2 border-solid border-transparent rounded-2xl shadow-lg transition ease-in duration-100 hover:cursor-pointer hover:scale-95 ">
        <img
          className="res-img w-[100%] h-[186px] rounded-2xl"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className="text-[#111827] mx-4 my-1 text-[18px] font-bold">{name}</h3>
        <div className="rate-deli mb-[10px] flex justify-around text-[16px] font-bold">
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
        <p className="text-[#6b7280] m-[5px] text-[16px]">{cuisines.join(", ")}</p>
      </div>
    );
  };

  //Higher order Component
  //input-Restaurant card => RestaurantCardPromoted


export const withPromotedLabel = (RestaurantCard) =>{
    return () =>{
      return(
        <div>
          <label>Promoted</label>
          <RestaurantCard/>
        </div>
      )
    }
  }


  export default RestaurantCard;