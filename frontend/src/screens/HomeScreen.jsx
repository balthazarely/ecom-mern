import React from "react";
import products from "../products";
import { PageWrapper, Product } from "../components";

const HomeScreen = () => {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 sm:grid-cols-2">
        {products.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>
    </PageWrapper>
  );
};

export { HomeScreen };
