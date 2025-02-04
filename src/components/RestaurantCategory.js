import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   console.log(data);

    // const [showItems, setShowItems] =useState(false);


    const handleClick =() =>{
        // console.log("clciked");
        // setShowItems(!showItems);
        setShowIndex(); 

    }
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4  ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems &&<ItemList items={data?.itemCards} />}
      </div>

      {/* Accordion data */}
    </div>
  );
};

export default RestaurantCategory;
