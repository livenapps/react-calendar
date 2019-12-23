import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from "redux";
import datePickerReducer from './containers/App/reducer';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
var store = createStore(combineReducers({
  datePickerReducer: datePickerReducer
}));
/**
 * Date picker
 *
 * @returns {component}
 * @param date
 */

ReactDOM.render(React.createElement(Provider, {
  store: store
}, React.createElement(App, {
  initialDate: new Date(),
  onChange: '',
  store: store,
  title: 'Start date'
})), document.getElementById('react-date-picker'));
serviceWorker.unregister();
