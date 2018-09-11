import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// redux imports
import burgerReducer from './store/reducer/burger.reducer';
import authReducer from './store/reducer/auth.reducer';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
        burgerBuilder: burgerReducer,
        auth:  authReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(thunk)
));

let auth = localStorage.getItem('username')
let token = localStorage.getItem('token');
let app = null;
if (auth && token) {
        app = <App layout='user' />
} else {
        app = <App layout='admin' />
}
ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                        {app}
                </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
registerServiceWorker();
