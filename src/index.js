import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from "redux";
import datePickerReducer from './reducer';
import DatePicker from './containers/DatePicker';
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({datePickerReducer}));

/**
 * Date picker
 *
 * @returns {component}
 * @param date
 */

ReactDOM.render(
    <Provider store={store}>
        <DatePicker initialDate={new Date()}
             onChange={''}
             store={store}
             title={'Start date'}
        />
    </Provider>,
    document.getElementById('react-date-picker'));

serviceWorker.unregister();

export {DatePicker, datePickerReducer};
