import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css'; // We'll create this CSS file next

const Cart = () => {
  const { cartItems, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
