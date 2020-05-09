import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selectors'
import {ReactComponent as Logo } from "../../assets/logo/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <div className="logo-container">
          <Link to="/"><Logo/></Link>
        </div>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/" className="option">Contact</Link>
            {
                currentUser ?(
                <div className="option" onClick={()=> auth.signOut()}> SignOut</div>) :(
                <Link to="/signin" className="option">Signin</Link>)

            }
            <CartIcon></CartIcon>
        </div>
        {
          hidden ? null: <CartDropdown/>
        }
    </div>
)

const mapStateToProps = createStructuredSelector( {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);