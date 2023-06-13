import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PageWrapper } from "../components";
import { useGetProductQuery } from "../slices/productsApiSlice";
import { useState } from "react";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";

function ProductScreen() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: product, isLoading, error } = useGetProductQuery(productId);
  const [qty, setQty] = useState(1);

  function addToCardHandler() {
    dispatch(
      addToCart({
        ...product,
        qty,
      })
    );
    navigate("/cart");
  }

  return (
    <PageWrapper className="">
      <div className="grid  grid-cols-1 sm:grid-cols-2">
        {isLoading ? (
          "loading"
        ) : (
          <>
            <figure className="w-72 h-72">
              <img src={`${product?.image}`} alt="Shoes" />
            </figure>
            <div className="flex flex-col gap-4 text-left">
              <h2 className="card-title">{product?.name}</h2>
              <div className="font-bold">${product?.price}</div>
              <p className="text-sm">{product?.description}</p>
              <div className="card-actions justify-start">
                <select
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled selected>
                    Quantity
                  </option>
                  {[...Array(product?.countInStock).keys()].map((x) => {
                    return <option value={x + 1}>{x + 1}</option>;
                  })}
                </select>
                <button
                  onClick={addToCardHandler}
                  className="btn btn-primary btn-sm"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </PageWrapper>
  );
}

export { ProductScreen };
