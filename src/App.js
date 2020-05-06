import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page.component';
import { auth } from './firebase/firebase.utils'

class  App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
   this.unSubscribeFromAuth =   auth.onAuthStateChanged( 
      (user) => this.setState({currentUser: user})
      );
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route  path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SigninSignupPage}></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
