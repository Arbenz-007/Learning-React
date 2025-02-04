import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                -₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute mt-10 ml-6">
              <button className="p-2 my-14 mx-7 rounded-lg bg-white shadow-lg text-[10px]">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-25 rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
