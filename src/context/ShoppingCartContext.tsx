import React, { createContext } from "react";
import ShoppingCart from "@/components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { toast } from "sonner";

// Define type for a product/item
export type CartItemTypes = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  quantity: number;
};

// Define type for context values
export type ShoppingCartContextType = {
  cart: CartItemTypes[];
  addToCart: (item: CartItemTypes, quantity: number) => void;
  removeFromCart: (id: string) => void;
  closeCart: () => void;
  openCart: () => void;
  cartQuantity: number;
  totalPrice: number;
};

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

export function useShoppingCart() {
  return React.useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useLocalStorage("shopping-cart", []);
  const [isOpen, setIsOpen] = React.useState(false);

  const openCart = () => {
    console.log("openCart");
    setIsOpen(true);
    document.body.classList.add("no-scroll"); // Disable background scrolling
  };
  const closeCart = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll"); // Re-enable background scrolling
  };

  const cartQuantity = cart.length;

  const addToCart = (item: CartItemTypes, quantity: number) => {
    setCart((prevCart: CartItemTypes[]) => {
      // Check if the item already exists in the cart
      toast.success(`${item.name} დაემატა კალათას`);
      const existingItem = prevCart.find(
        (cartItemTypes) => cartItemTypes.id === item.id
      );

      if (existingItem) {
        // If it exists, update the quantity
        return prevCart.map((cartItemTypes) =>
          cartItemTypes.id === item.id
            ? { ...cartItemTypes, quantity: cartItemTypes.quantity + quantity }
            : cartItemTypes
        );
      } else {
        // If it doesn't exist, add it to the cart
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const totalPrice = cart.reduce(
    (total: number, cartItemTypes: CartItemTypes) => {
      const item = cart.find((i: CartItemTypes) => i.id === cartItemTypes.id);
      return total + (item?.price || 0) * cartItemTypes.quantity;
    },
    0
  );

  const removeFromCart = (id: string) => {
    setCart((prevCart: CartItemTypes[]) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        closeCart,
        openCart,
        cart,
        cartQuantity,
        totalPrice,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
