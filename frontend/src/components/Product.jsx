import React from "react";
import { Link } from "react-router-dom";

export function Product({ product }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="w-full h-72">
        <Link to={`/product/${product._id}`}>
          <img src={`${product.image}`} alt="Shoes" />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-sm">{product.description}</p>
        <div className="card-actions justify-between">
          <div className="font-bold">${product.price}</div>
          <button className="btn btn-primary btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
