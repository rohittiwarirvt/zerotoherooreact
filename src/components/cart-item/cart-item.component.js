import React from 'react';
import './cart-item.styles.scss';


const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <div class="cart-item">
    <img src={imageUrl} alt='item'/>
    <div class="item-details">
      <div className="name"> {name}</div>
      <div className="price">
        {quantity} * {price}</div>
    </div>
  </div>
);

export default CartItem;