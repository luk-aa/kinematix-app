import { useEffect, useState } from "react";
import { getProducts } from "@/data";
import {
  useLoaderData,
  Link,
  LoaderFunction,
  useLocation,
} from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { productTypes } from "./index";
import { ShoppingCartContextType } from "@/context/ShoppingCartContext";
import { LuShoppingCart } from "react-icons/lu";
import { BsBagCheck } from "react-icons/bs";
import ProdsCarousel from "./Carousel";
import { LoaderFunctionArgs } from "react-router-dom";

export const loader: LoaderFunction = ({ params }: LoaderFunctionArgs) => {
  const { id } = params; // Access the id from params
  if (!id) {
    return null; // Handle case when id is missing
  }

  const product = getProducts(id); // Replace with actual logic
  return product || null;
};

const ProductDetail = () => {
  const product = useLoaderData() as productTypes;
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(product.price);
  const location = useLocation(); // Detects the current route (link)
  const { addToCart } = useShoppingCart() as ShoppingCartContextType;

  useEffect(() => {
    // Reset state when the URL changes
    setQuantity(1);
    setPrice(product.price);
  }, [location.pathname]);

  // Handle increase in quantity
  function plus(): void {
    setQuantity((prev) => prev + 1);
    setPrice((prev) => prev + product.price);
  }

  // Handle decrease in quantity
  function minus(): void {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setPrice((prev) => prev - product.price);
    }
  }

  return (
    <div>
      {/* <h1 className="text-center max-w-[310px] my-3 text-4xl font-bold m-auto">
        {product.name}
      </h1> */}
      <div className="lg:flex lg:space-x-10 mb-16">
        <div className="lg:w-1/2 rounded-sm md:rounded-none overflow-hidden">
          <img src={product.highResImageUrl} alt={product.name} />
        </div>
        <div className="py-6 px-5 bg-white text-center md:text-start lg:w-1/2 lg:px-8 lg:flex lg:flex-col lg:justify-center">
          <h2 className="mb-5 text-3xl">{product.name}</h2>
          <p className="text-xl opacity-70">{product.description}</p>
          <span className="my-5 text-2xl text-primary font-semibold block">
            {price.toFixed(2)}₾
          </span>
          <p className="font-semibold mb-2 md:mb-0">რაოდენობა</p>
          <div className="block md:flex gap-3 items-center justify-start text-xl text-primary font-semibold ">
            <ul className="flex justify-center items-center">
              <li>
                <button
                  onClick={minus}
                  disabled={quantity === 1}
                  className={` w-14 h-14 border-[1px] border-gray-300 shadow-md ${
                    quantity === 1
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                >
                  -
                </button>
              </li>
              <li className="w-14 h-14 border-y-[1px] border-gray-300 flex justify-center items-center shadow-md">
                {quantity}
              </li>
              <li>
                <button
                  onClick={plus}
                  className="w-14 h-14 border-[1px] border-gray-300 hover:bg-gray-100 shadow-md"
                >
                  +
                </button>
              </li>
            </ul>
            <button
              className="  p-5 w-full md:w-auto flex gap-4 justify-center items-center rounded-full text-primary text-xl my-5 md:my-0 border-[1px] border-primary hover:bg-gray-100 shadow-md"
              //Fixed typescript error by adding spread operator and qunaity
              onClick={() => addToCart({ ...product, quantity }, quantity)}
            >
              <LuShoppingCart />
              <span className="md:hidden xl:block">დამატება</span>
            </button>
            <Link to="/contact">
              <button
                className="p-5 w-full md:w-auto flex justify-center items-center gap-4 rounded-full text-xl text-white bg-primary hover:brightness-105 shadow-md"
                //Fixed typescript error by adding spread operator and qunaity
                onClick={() => addToCart({ ...product, quantity }, quantity)}
              >
                <BsBagCheck className="text-xl" />
                <span>ყიდვა</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ProdsCarousel />
    </div>
  );
};

export default ProductDetail;
