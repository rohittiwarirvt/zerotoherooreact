import React from 'react';
import {connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems} from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">{
      cartItems.length ?(
      cartItems.map(item => <CartItem key={item.id} item={item}/>)):(
        <div className="empty-message">Your cart is empty</div>
      )
    }

    </div>
    <CustomButton onClick={() =>{ 
      history.push('/checkout');
      dispatch(toggleCartHidden());
        }
      }>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));