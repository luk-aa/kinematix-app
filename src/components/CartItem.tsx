import { IoClose } from "react-icons/io5";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ShoppingCartContextType } from "../context/ShoppingCartContext";
import { CartItemTypes } from "../context/ShoppingCartContext";

const CartItem = ({ cart }: { cart: CartItemTypes[] }) => {
  const { removeFromCart } = useShoppingCart() as ShoppingCartContextType;

  const cartMap = cart.map((item) => (
    <div
      key={item.id}
      className="relative flex justify-between mt-5 border-[1px] p-2 shadow-md "
    >
      <div className="max-w-20 object-cover overflow-hidden">
        <img
          src={item.imageUrl}
          alt="item-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-5 flex flex-col justify-center w-full">
        <div className="flex items-center">
          <p className="text-sm  bg-slate-0">{item.name}</p>
        </div>
        <div className="flex justify-between items-center w-full ">
          <span className=" text-primary font-semibold">
            {item.price * item.quantity}.00$
          </span>
          <p className="  text-primary font-semibold">x{item.quantity}</p>
        </div>
      </div>
      <span
        onClick={() => removeFromCart(item.id)}
        className="ml-auto  p-2  flex items-center cursor-pointer text-gray-400"
      >
        <IoClose />
      </span>
    </div>
  ));
  return <div>{cartMap}</div>;
};

export default CartItem;
