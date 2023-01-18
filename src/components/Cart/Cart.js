import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let items = 0;
  let shipping = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    items = items + product.price;
    shipping = shipping + product.shipping;
  }
  const totalBrforeTax = items + shipping;
  const tax = totalBrforeTax * (10 / 100);
  const total = totalBrforeTax + tax;
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h4>Order Summary</h4>
        <p>Items ordered: {cart.length}</p>
      </div>

      <p className="orderStyle">
        <span1>Items:</span1> <span>${parseFloat(items.toFixed(2))}</span>
      </p>
      <p className="orderStyle">
        <span1>Shipping & Handling:</span1> <span>${parseFloat(shipping.toFixed(2))}</span>
      </p>
      <p className="orderStyle">
        <span1>Total before tax:</span1>{" "}
        <span>${parseFloat(totalBrforeTax.toFixed(2))}</span>
      </p>
      <p className="orderStyle">
        <span1>Estimated tax:</span1> <span>${parseFloat(tax.toFixed(2))}</span>
      </p>
      <h3 style={{ color: "darkorange" }}>
        Order Total: &nbsp;&nbsp;&nbsp; ${parseFloat(total.toFixed(2))}
      </h3>
      <button className="review-btn">Review your order</button>
    </div>
  );
};

export default Cart;
