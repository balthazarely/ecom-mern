import React, { useEffect } from "react";
import products from "../products";
import { useParams } from "react-router-dom";
import { PageWrapper } from "../components";

function ProductScreen() {
  const { id: productId } = useParams();
  const product = products.find((product) => product._id === productId);
  return (
    <PageWrapper className="">
      <div className="grid  grid-cols-1 sm:grid-cols-2">
        <figure className="w-72 h-72">
          <img src={`${product.image}`} alt="Shoes" />
        </figure>
        <div className="flex flex-col gap-4 text-left">
          <h2 className="card-title">{product.name}</h2>
          <div className="font-bold">${product.price}</div>
          <p className="text-sm">{product.description}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export { ProductScreen };
