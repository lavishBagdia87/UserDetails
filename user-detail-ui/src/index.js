import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from "./redux/store/index";
import Root from './components/root/Root'
export const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
ReactDOM.render(
  <Provider store={reduxStore}>
    <Root />
 </Provider>,
  document.getElementById('root')
);

