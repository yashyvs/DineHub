import { useParams } from "react-router-dom";
import {
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  swiggy_menu_api_URL,
} from "../config";
import useResMenuData from "../Hooks/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

import MenuItemsCard from "./MenuItemsCard";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="bg-orange-50 px-[10%] py-4 flex justify-between items-start gap-8">
        <div className="w-2/5">
          <h1 className="pt-2 font-bold font-primary text-2xl">
            {restaurant?.name}
          </h1>
          <p className="pt-2 font-secondary font-bold text-dark">
            {restaurant?.city + ", " + restaurant?.areaName}
          </p>
          <p className="pt-2 text-sm font-secondary text-dark">
            {restaurant?.cuisines.join(", ")}
          </p>
          <div className="p-2 mt-2 flex justify-between items-center">
            <p className="p-2 font-bold font-secondary text-dark text-sm">
              {restaurant?.costForTwoMessage}
            </p>
            <p className="p-2 font-bold font-secondary text-dark text-sm">|</p>
            <p className="py-1 px-2 flex justify-center items-center bg-accent font-bold font-secondary text-dark text-sm">
              {restaurant?.avgRating ? restaurant?.avgRating + " ⭐" : "- ⭐"}
            </p>
            <p className="p-2 font-bold font-secondary text-dark text-sm">|</p>
            <p className="p-2 font-bold font-secondary text-dark text-sm">
              {restaurant?.isOpen ? "OPEN" : "CLOSED"}
            </p>
          </div>
        </div>

        <div className="p-4 w-full flex flex-col border-[1px] border-dark rounded-lg">
          <h1 className="my-2 py-8 text-center text-2xl font-primary font-bold text-dark border-b-[1px] border-dark border-dashed">
            Menu
          </h1>
          <p className="p-2 font-primary font-bold text-center">
            Total items: {menuItems ? menuItems.length : 0}
          </p>
          {menuItems ? (
            menuItems.map((menuItem, index) => {
              return (
                <MenuItemsCard
                  key={index}
                  info={menuItem}
                  restaurantName={restaurant?.name}
                  resId={resId}
                />
              );
            })
          ) : (
            <p className="p-2 mt-2 font-primary text-lg text-dark">
              Menu not available at this moment
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
