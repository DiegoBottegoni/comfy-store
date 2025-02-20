import { useLoaderData } from "react-router-dom";
import { generateAmountOptions } from "../utils";

const PaginationContainer = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-16 flex justify-end">
      <button className="join-item btn">1</button>
      <button className="join-item btn">2</button>
      <button className="join-item btn btn-disabled">...</button>
    </div>
  );
};
export default PaginationContainer;
