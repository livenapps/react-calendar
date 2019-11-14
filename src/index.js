import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from "redux";
import calendarReducer from './containers/App/reducer';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({calendarReducer}));

/**
 * Date picker
 *
 * @param {string || object} initialDate - 'Year-Month-Day' || object Date
 * @param {function} onChange - callback, @param: current date object
 * @param {component} sidebarData - date on month view sidebar
 * @returns {component}
 */

ReactDOM.render(
    <Provider store={store}>
        <App initialDate={''} onChange={''} sidebarData={''} />
    </Provider>,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
