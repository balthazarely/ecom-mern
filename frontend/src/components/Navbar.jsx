import React from "react";
import { PageWrapper } from "./PageWrapper";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

export function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="navbar bg-base-200">
      <PageWrapper classname="w-full">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex gap-2">
          <div className="text-sm font-bold text-white rounded-full bg-primary w-6 h-6 flex justify-center items-center">
            {cartItems?.reduce((acc, c) => acc + c.qty, 0)}
          </div>
          <AiOutlineShoppingCart className="text-2xl" />
        </div>
      </PageWrapper>
    </div>
  );
}
