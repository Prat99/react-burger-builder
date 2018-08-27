import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
// redux imports
import reducer from './store/reducer/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(reducer);

ReactDOM.render(
        <Provider store={store}>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
registerServiceWorker();
