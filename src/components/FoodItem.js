import { ITEM_IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

const FoodItem = ({ item }) => {
  console.log(item);
  return (
    <div className="w-full mt-2 p-2 flex justify-between items-center gap-4 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-full">
        <h1 className="p-2 font-bold font-primary">
          {item.itemRestaurant + ": "}
          <span className="text-light hover:text-primary">
            <Link to={"/restaurant/" + item.itemRestaurantId}>
              Visit Restaurant
            </Link>{" "}
          </span>
        </h1>{" "}
        <h1 className="p-2 font-secondary">{item.itemName}</h1>
        <h1 className="p-2 font-secondary font-bold text-dark">
          ₹{item.itemPrice ? item.itemPrice : "200"}
        </h1>
      </div>

      <div className="w-1/4 flex flex-col justify-center items-center gap-2">
        <img
          className="h-20 w-28 rounded-lg"
          src={item.itemImage ? ITEM_IMG_CDN_URL + item.itemImage : FoodItem}
        />
        <p className="font-secondary font-bold text-sm">
          {"Qantity: " + item.itemCount}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
