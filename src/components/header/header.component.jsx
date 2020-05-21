import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selectors'
import {ReactComponent as Logo } from "../../assets/logo/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import  {HeaderContainer, LogoContainer, OptionsContainer,OptionsLink} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" className="logo-container">
          <Logo/>
        </LogoContainer>
        <OptionsContainer className="options">
            <OptionsLink to="/shop" className="option">Shop</OptionsLink>
            <OptionsLink to="/" className="option">Contact</OptionsLink>
            {
                currentUser ?(
                <OptionsLink as="div" className="option" onClick={()=> auth.signOut()}> SignOut</OptionsLink>) :(
                <OptionsLink to="/signin" className="option">Signin</OptionsLink>)

            }
            <CartIcon></CartIcon>
        </OptionsContainer>
        {
          hidden ? null: <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector( {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);