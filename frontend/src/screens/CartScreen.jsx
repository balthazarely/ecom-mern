import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageWrapper } from "../components";
import { removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    console.log("yeo");
    dispatch(removeFromCart(id));
  };

  return (
    <PageWrapper>
      <div className="text-2xl mb-2">Cart</div>
      <div>
        {cartItems.length === 0 ? (
          <div>nothign in cart</div>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <div className="flex gap-2  border-2">
                  <figure className="w-16 h-16">
                    <img src={`${item?.image}`} alt="Shoes" />
                  </figure>
                  <div>
                    <div className="text-lg font-bold">{item.name}</div>
                    <div className="text-sm font-bold flex gap-8">
                      <div> Quantity: {item.qty}</div>
                      <button
                        onClick={() => removeFromCartHandler(item._id)}
                        className="btn btn-xs"
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mt-16">
              <div className="text-2xl">Total</div>
              <div>item price: ${cart.itemsPrice} </div>
              <div>shipping: ${cart.shippingPrice} </div>
              <div>tax: ${cart.taxPrice} </div>
              <div>total price: ${cart.totalPrice} </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export { CartScreen };
