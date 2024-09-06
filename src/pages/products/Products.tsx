import { LuShoppingCart } from "react-icons/lu";
import { productTypes } from "./index";

const Products = ({ products }: { products: productTypes[] }) => {
  const productsMap = products.map((product: productTypes) => (
    <div
      key={product.id}
      className="relative p-5 h-[340px] border-[1px] hover:border-primary hover:shadow-md"
    >
      <div className="max-h-[130px] border-black bg-black mb-8 flex justify-center items-center overflow-hidden">
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
  return <div className="grid grid-cols-4">{productsMap}</div>;
};

export default Products;
