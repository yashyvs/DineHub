import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const gstRate = 0.18; // Assuming GST rate is 18%

  // Calculate the total bill, GST, and taxes
  const subtotal = cartItems.reduce(
    (total, item) =>
      item.itemPrice
        ? total + item.itemPrice * item.itemCount
        : total + 200 * item.itemCount,
    0
  );
  const gstAmount = subtotal * gstRate;
  const totalWithTaxes = subtotal + gstAmount;
  return (
    <div>
      <h1 className="w-full p-2 font-bold font-primary text-center text-3xl">
        Cart Items - {cartItems.length}
      </h1>
      <div className="flex justify-end">
        {" "}
        {/* This div contains the button */}
        <button
          className="font-bold font-primary text-center bg-green-100 p-2 m-5"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
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
      <div className="w-full p-4">
        {cartItems.length > 0 && (
          <>
            <h2 className="text-3xl text-gray-700 w-full p-2 font-bold font-primary text-center">
              Subtotal: ₹{subtotal.toFixed(2)}
            </h2>
            <p className="text-3xl text-gray-700 w-full p-2 font-bold font-primary text-center">
              GST ({(gstRate * 100).toFixed(2)}%): ₹{gstAmount.toFixed(2)}
            </p>
            <p className="text-3xl text-gray-700 w-full p-2 font-bold font-primary text-center">
              Total with Taxes: ₹{totalWithTaxes.toFixed(2)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
