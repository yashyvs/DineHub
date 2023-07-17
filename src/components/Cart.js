import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="w-full p-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <FoodItem item={item} key={item.itemId} />;
          })
        ) : (
          <h1 className="w-full p-2 font-bold font-primary text-center text-red-600">
            No items in Cart
          </h1>
        )}
      </div>
    </div>
  );
};
export default Cart;
