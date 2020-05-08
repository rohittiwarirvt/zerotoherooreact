import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from  'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action';

class  App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
   const { setCurrentUser } = this.props;
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
       setCurrentUser(userAuth)

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

const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
