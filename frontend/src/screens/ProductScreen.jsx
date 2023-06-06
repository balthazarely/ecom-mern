import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "../components";
import axios from "axios";

function ProductScreen() {
  const [product, setProduct] = useState([]);
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProducts();
  }, []);

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
