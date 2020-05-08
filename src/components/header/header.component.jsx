import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {ReactComponent as Logo } from "../../assets/logo/logo.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
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
            
        </div>
    </div>
)

const mapStateToProps = state =>( {
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);