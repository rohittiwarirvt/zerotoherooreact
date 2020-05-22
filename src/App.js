import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import { connect } from  'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import {selectCollectionsPreview} from './redux/shop/shop.selectors';
import CheckoutPage from './pages/checkout/checkout.component';

class  App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
   const { setCurrentUser, collectionsArray } = this.props;
   this.unSubscribeFromAuth =  auth.onAuthStateChanged( async userAuth =>
     { 
       if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
        

       }
       setCurrentUser(userAuth);
       console.log(collectionsArray);
       addCollectionsAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    });

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route  path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path="/signin" render={() =>
            this.props.currentUser ?
             (<Redirect to="/"></Redirect>):
             (<SigninSignupPage/>)
          }
          ></Route>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  collectionsArray: selectCollectionsPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => { dispatch(setCurrentUser(user))},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
