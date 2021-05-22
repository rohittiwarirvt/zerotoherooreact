import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect}  from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';
import { createUserProfileDocument, auth } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path ='/shop' component={ShopPage} />
          <Route path='/checkout' exact component={CheckoutPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ?
                   (<Redirect to='/' />) : ( <SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
