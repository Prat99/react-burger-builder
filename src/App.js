import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' exact component={Checkout}></Route>
            <Route path='/' exact component={BurgerBuilder}></Route>     
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
