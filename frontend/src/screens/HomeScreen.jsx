import React from "react";
import { PageWrapper, Product } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
