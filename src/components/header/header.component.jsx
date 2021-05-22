
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../carticon/carticon.component';
import CartDropdown from '../cartdropdown/cartdropdown.component';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/shop'>Contact</Link>
      { currentUser  ? (
        <div className='option' onClick={() => auth.signOut()}> SignOut</div>
        ) : (<Link className='option' to='/signin'>Signin</Link>)}
       <CartIcon></CartIcon>
       {hidden ? null : <CartDropdown></CartDropdown>}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, null)(Header);