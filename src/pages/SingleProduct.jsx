import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, description, colors, company, price } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const dollarsAmount = formatPrice(price);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleClick = (e) => {
    console.log(typeof amount + " " + amount);
    console.log("Se te perdio algo?");
    e.preventDefault();
  };

  return (
    <section>
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{dollarsAmount}</p>

          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div>
            <label htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize mt-2">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          <button
            className="btn btn-secondary btn-md mt-10 px-4 py-6"
            type="button"
            onClick={handleClick}
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
