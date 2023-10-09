import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { swiggy_api_URL } from "../config";
import { filterData } from "../utils/helper";
import BodyShimmer from "./BodyShimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(swiggy_api_URL);
    const json = await data.json();
    console.log(json);

    // handling api error
    if (
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ) {
      setAllRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } else {
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); }
  }

  if (!allRestaurants) return null;

  return (
    <div className="px-[10%] py-4 pb-0 relative">
      <div className="w-1/2 mx-auto mt-4 mb-6 flex justify-between items-center border-[1px] border-solid border-light ">
        <input
          className="w-full py-2 px-4 text-base font-secondary focus:outline-none"
          placeholder="Search for restaurants"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="py-2 px-4 text-dark hover:text-primary"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="min-h-screen p-4 flex flex-wrap justify-around gap-4">
        {filteredRestaurants.length === 0 ? (
          <BodyShimmer />
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
