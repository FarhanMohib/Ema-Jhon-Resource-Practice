import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Items Ordered: {cart.length}</p>
      <p>Total Price: {total}</p>
    </div>
  );
};

export default Cart;
