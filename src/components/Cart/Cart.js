import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p><small>Items:</small></p>
            <p><small>Shipping & Handling:</small></p>
            <p><small>Total before tax:</small></p>
            <p><small>Estimated tax:</small></p>
        </div>
    );
};

export default Cart;