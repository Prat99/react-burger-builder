import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Switch, Route} from 'react-router-dom';
import Thankyou from './containers/Thankyou/Thankyou';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout'  component={Checkout}></Route>
            <Route path='/' exact component={BurgerBuilder}></Route> 
            <Route path='/thankyou' exact component={Thankyou}></Route>     
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
