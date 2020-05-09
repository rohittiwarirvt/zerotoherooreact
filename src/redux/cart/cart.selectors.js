import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);



export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedCartItems, cartItem) => accumulatedCartItems + cartItem.quantity, 0)
);