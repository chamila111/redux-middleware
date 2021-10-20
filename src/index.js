import React from 'react';
import {Provider} from 'react-redux';
import asyncMiddleware from './middlewares/async';
import  ReactDOM  from 'react-dom';
import App from './components/App';
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers'
ReactDOM.render(
    <Provider store={createStore(reducers,{},applyMiddleware(asyncMiddleware))}>
    <App/>
    </Provider>,
    document.querySelector('#root')
)