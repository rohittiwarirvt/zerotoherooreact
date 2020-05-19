import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectedCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';
import  StripeCheckoutButton  from '../../components/stripe-button/stripe-button.component';


const CheckoutPage = ({cartItems, cartTotal}) => (
  <div className="checkout-page">
    <div className='checkout-header'>
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>)} 
    <div className="total">${cartTotal}</div>
    <div className="test-warning" >
      *Please use following credit card number for test Payments*
      <br/>
      Card number: 4242 4242 4242 4242 - Exp: 01/2021 - Cvv: 123
    </div>
    <StripeCheckoutButton price={cartTotal}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectedCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);