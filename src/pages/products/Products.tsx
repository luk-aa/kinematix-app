import { LuShoppingCart } from "react-icons/lu";
import { productTypes } from "./index";
import { Link } from "react-router-dom";
import {
  ShoppingCartContextType,
  useShoppingCart,
} from "@/context/ShoppingCartContext";

const Products = ({ products }: { products: productTypes[] }) => {
  const { addToCart } = useShoppingCart() as ShoppingCartContextType;
  const productsMap = products.map((product: productTypes) => (
    <div className="relative sm:p-3 h-60 sm:h-[340px] border-[1px] bg-white hover:border-primary hover:shadow-md">
      <Link
        to={`/products/${product.id}`}
        key={product.id}
        className="hover:text-primary text-secondary"
        data-aos="fade-up"
        // state={{
        //   search: `?${searchParams.toString()}`,
        //   type: typeFilter,
        // }}
      >
        <div className="max-h-28 sm:max-h-[130px] flex justify-center items-center overflow-hidden">
          <img src={product.imageUrl} alt="product-image" />
        </div>
        <span className="block pt-3 text-center text-sm sm:text-lg sm:text-start">
          {product.name}
        </span>
      </Link>
      <div className="absolute flex justify-between items-center bottom-2 left-2 right-2 sm:bottom-5 sm:left-7 sm:right-7 text-primary text-md">
        <p className=" sm:text-lg font-semibold text-primary">
          {product.price}₾
        </p>
        <div
          className="p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white cursor-pointer"
          onClick={() => addToCart({ ...product, quantity: 1 }, 1)}
        >
          <LuShoppingCart className="sm:text-xl" />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {productsMap}
    </div>
  );
};

export default Products;
