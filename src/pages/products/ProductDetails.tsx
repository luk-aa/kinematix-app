import { getProducts } from "@/data";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"; // For the params type
import { productTypes } from "./index";

export function loader({ params }: LoaderFunctionArgs) {
  if (!params?.id) {
    throw new Error("Product ID is missing");
  }
  return getProducts(params.id);
}

const ProductDetails = () => {
  const product = useLoaderData() as productTypes;
  console.log(product.name);
  return <div></div>;
};

export default ProductDetails;
