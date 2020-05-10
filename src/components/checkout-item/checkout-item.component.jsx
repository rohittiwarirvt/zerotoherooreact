import React from 'react';
import { connect} from 'react-redux';
import './checkout-item.styles.scss';
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem }) =>{
  const {imageUrl,name, quantity, price} = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"></img>
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>  &#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)} >  &#10095;</div>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}> &#10005;</div>
    </div>
  )
}

const mapFunctionToProps = dispatch => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem:(item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item))
})
export default connect(null, mapFunctionToProps)(CheckoutItem);