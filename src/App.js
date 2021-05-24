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
import { checkUserSession } from './redux/user/user.actions';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import './App.css';

class App extends React.Component {


  componentDidMount() {
    const { checkUserSession, getCollectionForAddingToFirebase } = this.props;
    checkUserSession();


    // Code to add colleciton to Firestore
    //console.log(getCollectionForAddingToFirebase);
    //addCollectionAndDocuments('collections', getCollectionForAddingToFirebase.map( ({title, items}) => ({title, items})));
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
  currentUser: selectCurrentUser,
  getCollectionForAddingToFirebase: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
