import { popularProducts } from "@/data";
import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import Sidebar from "./Sidebar";
import { useState } from "react";

export function loader() {
  return popularProducts;
}

export type productTypes = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
};

const Store = () => {
  // Initialize state as an empty array of strings
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const products = useLoaderData() as productTypes[];
  console.log(selectedCategories);

  const filteredData =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category)
        )
      : products;

  return (
    <div className="flex h-screen space-x-10">
      <div className="hidden md:flex w-[600px]">
        <Sidebar
          setSelectedCategories={setSelectedCategories}
          selectedCategories={selectedCategories}
        />
      </div>
      <div className="flex-">
        <Products products={filteredData} />
      </div>
    </div>
  );
};

export default Store;
