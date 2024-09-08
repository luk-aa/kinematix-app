import { LuShoppingCart } from "react-icons/lu";
import { productTypes } from "./index";
import { Link } from "react-router-dom";

const Products = ({ products }: { products: productTypes[] }) => {
  const productsMap = products.map((product: productTypes) => (
    <Link to={`/products/${product.id}`}>
      <div
        key={product.id}
        className="relative sm:p-3 h-60 sm:h-[340px] border-[1px] bg-white hover:border-primary hover:shadow-md"
      >
        <div className="max-h-28 sm:max-h-[130px] mb-3 sm:mb-5 flex justify-center items-center overflow-hidden">
          <img src={product.imageUrl} alt="product-image" />
        </div>
        <h2 className="text-center text-sm sm:text-lg sm:text-start">
          {product.name}
        </h2>
        <div className="absolute flex justify-between items-center bottom-2 left-2 right-2 sm:bottom-5 sm:left-7 sm:right-7 text-primary text-md">
          <p className=" sm:text-lg font-semibold text-primary">
            {product.price}₾
          </p>
          <div className="p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white cursor-pointer">
            <LuShoppingCart className="sm:text-xl" />
          </div>
        </div>
      </div>
    </Link>
  ));
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {productsMap}
    </div>
  );
};

export default Products;
