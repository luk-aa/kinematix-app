import { popularProducts } from "@/data";
import { LuShoppingCart } from "react-icons/lu";

const Products = () => {
  const productsMap = popularProducts.map((product) => (
    <div
      key={product.id}
      className="relative p-5 h-[340px] border-[1px] hover:border-primary hover:shadow-md"
    >
      <div className="max-h-[170px] mb-8 flex justify-center items-center overflow-hidden">
        <img src={product.imageUrl} alt="product-image" />
      </div>
      <h2>{product.name}</h2>
      <div className="absolute flex justify-between items-center bottom-5 left-7 right-7 text-primary text-md">
        <p className="text-lg font-semibold text-primary">{product.price}₾</p>
        <div className="p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white cursor-pointer">
          <LuShoppingCart className="text-xl" />
        </div>
      </div>
    </div>
  ));
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-10">
      {productsMap}
    </div>
  );
};

export default Products;
