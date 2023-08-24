import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { ITEM_IMG_CDN_URL } from "../config";
import fastfoodPng from "../assets/fast-food.png";

const MenuItemsCard = (props) => {
  const dispatch = useDispatch();
  const { info, restaurantName, resId } = props;
  const cartItems = useSelector((store) => store.cart.items);

  const itemInfo = {
    itemRestaurantId: resId,
    itemRestaurant: restaurantName,
    itemId: info?.id,
    itemName: info?.name,
    itemPrice: info?.price / 100,
    itemImage: info?.imageId,
  };

  const handleAddItem = () => {
    dispatch(addItem(itemInfo));
  };

  const handleRemoveItem = (x) => {
    dispatch(removeItem(itemInfo.itemId));
  };
  return (
    <div className="mt-4 p-2 w-full flex justify-around items-center hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-1/2">
        <h1 className="font-bold font-secondary text-lg">{info?.name}</h1>
        <p className="mt-1 font-secondary font-bold text-sm">
          {info?.price ? "₹" + info?.price / 100 : "₹200"}
        </p>
        {info?.isVeg ? (
          <p className="text-green-600 font-bold text-sm font-secondary">VEG</p>
        ) : (
          <p className="text-red-600 font-bold text-sm font-secondary">
            NON-VEG
          </p>
        )}
        <p className="mt-1 font-secondary font-bold text-sm">
          {info?.ratings?.aggregatedRating?.rating
            ? +info?.ratings?.aggregatedRating?.rating + " ⭐"
            : "- ⭐"}
        </p>
      </div>
      <img
        className="h-20 w-28 rounded-lg"
        src={
          info?.imageId
            ? ITEM_IMG_CDN_URL + info?.imageId
            : fastfoodPng
        }
        alt="Menu item"
      />
      <div className="w-16 m-2 bg-accent shadow-lg rounded-sm">
        <div className="flex justify-between items-center text-2xl">
          <button onClick={() => handleRemoveItem()}>-</button>
          <p className="font-primary font-bold text-lg">
            {cartItems.find((item) => item.itemId === info?.id)?.itemCount}
          </p>
          <button onClick={() => handleAddItem()}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemsCard;
