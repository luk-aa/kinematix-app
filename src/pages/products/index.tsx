import { popularProducts } from "@/data";
import { useLoaderData, useSearchParams } from "react-router-dom";
import Products from "./Products";
import Sidebar from "./Sidebar";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

// Loader function returning the products
export function loader() {
  return popularProducts;
}

// Define product type
export type productTypes = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
};

// Type for handleFilterChange function
export type handleFilterChangeTypes = (
  key: string,
  value: string | null
) => void;

const Store = () => {
  const [showCategory, setShowCategory] = useState<boolean>(false);
  // Initialize searchParams and data
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData() as productTypes[];

  // Get the 'category' filter from searchParams
  const typeFilter = searchParams.get("category");

  // Define the handleFilterChange function with types
  const handleFilterChange: handleFilterChangeTypes = (key, value) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams); // Create a new instance
      if (value === null) {
        newParams.delete(key); // Delete if value is null
      } else {
        newParams.set(key, value); // Otherwise set the new value
      }
      return newParams; // Return the new search params
    });
  };

  // Filter products based on category
  const displayedVans = typeFilter
    ? dataPromise.filter((p) => p.category === typeFilter)
    : dataPromise;

  console.log(displayedVans);

  return (
    <div className="md:flex min-h-screen sm:space-x-10">
      {/* Sidebar */}
      <div className={`max-w-[500px] ${showCategory ? "block" : "hidden"}`}>
        <Sidebar
          handleFilterChange={handleFilterChange}
          typeFilter={typeFilter}
          setShowCategory={setShowCategory}
        />
      </div>
      {!showCategory && (
        <>
          <button
            className="flex items-center justify-center md:hidden w-full mb-2 text-secondary  bg-slate-200 px-5 py-3"
            onClick={() => setShowCategory(true)}
          >
            კატეგორიები
            <MdKeyboardArrowUp className="text-lg" />
          </button>
          <div className="">
            <Products products={displayedVans} />
          </div>
        </>
      )}
    </div>
  );
};

export default Store;
