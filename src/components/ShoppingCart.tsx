import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { ShoppingCartContextType } from "../context/ShoppingCartContext";
import { BsBagCheck } from "react-icons/bs";
const ShoppingCart = ({ isOpen }: { isOpen: boolean }) => {
  const { closeCart, cart, totalPrice } =
    useShoppingCart() as ShoppingCartContextType;

  return (
    <>
      {/* Overlay to close the cart when clicked */}
      {isOpen && (
        <div
          onClick={closeCart}
          className={`fixed inset-0 h-full bg-black bg-opacity-70 z-40`}
        ></div>
      )}

      {/* Shopping cart panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-5/12  px-2 py-4 md:p-10 pb-5 overflow-y-auto flex flex-col justify-between bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div>
          {/* Close button */}
          <div className="flex justify-between">
            <h1 className="text-2xl">კალათი</h1>
            <span
              onClick={closeCart}
              className="cursor-pointer text-xl text-gray-500"
            >
              დახურვა
            </span>
          </div>
          {/* Cart content goes here */}
          {cart.length === 0 ? (
            <p className="text-2xl mt-20 text-center text-gray-500">
              კალათი ცარიელია
            </p>
          ) : null}
          <CartItem cart={cart} />
        </div>

        {/* Total price */}
        {cart.length > 0 && (
          <div className="flex flex-col justify-between gap-5 mb-5">
            <p className="text-center text-xl mt-5">ჯამში: {totalPrice}.00₾</p>
            <Link to="/contact" onClick={closeCart}>
              <button className="flex items-center justify-center gap-5 w-full h-14 text-xl rounded-full text-white bg-primary hover:brightness-110">
                <BsBagCheck className="text-xl" />
                ყიდვა
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
