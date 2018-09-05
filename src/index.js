import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
// redux imports
import burgerReducer from './store/reducer/burger.reducer';
import ordersReducer from './store/reducer/orders.reducer';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';


//const rootReducer = combineReducers(burgerReducer, ordersReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(burgerReducer, composeEnhancers(
        applyMiddleware(thunk)
));

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
registerServiceWorker();
