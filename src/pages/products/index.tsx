import { popularProducts } from "@/data";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import Products from "./Products";
import Sidebar from "./Sidebar";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";
import { SkeletonCard } from "./ProdsSkeleton";

// Loader function returning the products
export function loader() {
  return defer({ prods: popularProducts });
}

// Define product type
export type productTypes = {
  id: string;
  name: string;
  imageUrl: string;
  highResImageUrl: string;
  description: string;
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
  const dataPromise = useLoaderData() as { prods: Promise<productTypes[]> };

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

  // Function to render product elements
  function renderProdElements(prods: productTypes[]) {
    const displayedProds = typeFilter
      ? prods.filter((p) => p.category === typeFilter)
      : prods;

    return (
      <>
        <div
          className={`max-w-[500px] md:block ${
            showCategory ? "block" : "hidden"
          }`}
        >
          <Sidebar
            handleFilterChange={handleFilterChange}
            typeFilter={typeFilter}
            setShowCategory={setShowCategory}
          />
        </div>
        {!showCategory && (
          <>
            <button
              className="flex items-center justify-center md:hidden w-full mb-2 text-secondary bg-slate-200 px-5 py-3"
              onClick={() => setShowCategory(true)}
            >
              კატეგორიები
              <MdKeyboardArrowUp className="text-lg" />
            </button>
            <div>
              <Products products={displayedProds} />
            </div>
          </>
        )}
      </>
    );
  }

  return (
    <div className="md:flex min-h-screen md:space-x-10">
      <React.Suspense fallback={<SkeletonCard />}>
        <Await resolve={dataPromise.prods}>
          {(prods) => renderProdElements(prods)}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default Store;
