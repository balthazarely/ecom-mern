import React from "react";
import { PageWrapper, Product } from "../components";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <PageWrapper>
      {isLoading ? (
        "loading"
      ) : (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 sm:grid-cols-2">
          {products?.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export { HomeScreen };
