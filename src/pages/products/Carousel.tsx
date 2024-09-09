import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { popularProducts } from "@/data";
import { LuShoppingCart } from "react-icons/lu";
import {
  ShoppingCartContextType,
  useShoppingCart,
} from "@/context/ShoppingCartContext";

const ProdsCarousel = () => {
  const prods = popularProducts;
  const { addToCart } = useShoppingCart() as ShoppingCartContextType;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=""
    >
      <h2 className="text-2xl pt-2">მსგავსი პროდუქტი</h2>
      <CarouselContent>
        {prods.map((product, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/4 pt-5">
            <div className="relative sm:p-3 h-60 sm:h-[340px] border-[1px] bg-white hover:border-primary hover:shadow-md">
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="hover:text-primary text-secondary"
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProdsCarousel;
