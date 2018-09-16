import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import AuthLayout from './components/AuthLayout/AuthLayout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Thankyou from './containers/Thankyou/Thankyou';
import { connect } from 'react-redux';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  render() {
  
    // if (!this.props.isAuthenticated) {
    //   console.log('inside unauthenticated');
    //   lay = <AuthLayout >
    //     <Switch>
    //       <Route path='/' exact component={Auth}></Route>
    //     </Switch>
    //   </AuthLayout>
    // } else if (this.props.isAuthenticated) {
      let routes = (<Switch>
          <Route path='/checkout' exact component={Checkout}></Route>
          <Route path='/thankyou' exact component={Thankyou}></Route>
          <Route path='/logout' exact component={Logout}></Route>
          <Route path='/burger' exact component={BurgerBuilder}></Route>
          <Route path='/' exact component={Auth}></Route>
        </Switch>)
   // }
    return (
      <div>
       <Layout>
         {routes}
       </Layout>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

//export default connect(mapStateToProps)(App);
export default App;
