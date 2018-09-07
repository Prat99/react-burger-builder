import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import AuthLayout from './components/AuthLayout/AuthLayout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Thankyou from './containers/Thankyou/Thankyou';

class App extends Component {
  render() {
    console.log(this.props);
    let lay = null;
    if (this.props.layout === 'admin') {
      lay = <AuthLayout >
        <Switch>
          <Route path='/' exact component={Auth}></Route>
        </Switch>
      </AuthLayout>
    } else if (this.props.layout === 'auth') {
     lay = <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout}></Route>
          <Route path='/burger' exact component={BurgerBuilder}></Route>
          <Route path='/thankyou' exact component={Thankyou}></Route>
        </Switch>
      </Layout>
    }
    return (
      <div>
        {lay}
      </div>
    );  
  }
}

export default App;
