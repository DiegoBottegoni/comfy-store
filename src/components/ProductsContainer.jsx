import { useState } from "react";
import { ProductsList, ProductsGrid } from "./index";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const [layout, setLayout] = useState("grid");
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const setActiveStyle = (currentLayout) => {
    return `text-xl btn btn-circle btn-sm ${
      currentLayout === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && `s`}
        </h4>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyle("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyle("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-center text-2xl mt-16">Sorry, not matches</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
