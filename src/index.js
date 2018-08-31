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
import { createStore, combineReducers } from 'redux';


//const rootReducer = combineReducers(burgerReducer, ordersReducer);
const store = createStore(burgerReducer);

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
registerServiceWorker();
