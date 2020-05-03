import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';
import Header from './components/header/header.component';
import SigninSignupPage from './pages/signin-signup-page/signin-signup-page.component';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route  path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SigninSignupPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
