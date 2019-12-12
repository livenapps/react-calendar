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
 * @returns {component}
 * @param date
 */

ReactDOM.render(
    <Provider store={store}>
        <App initialDate={new Date()}
             onChange={''}
             sidebarData={''}
             store={store}
             title={'Start date'}
        />
    </Provider>,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
