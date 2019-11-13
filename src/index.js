import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from "redux";

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import App from './containers/App';

const store = createStore(combineReducers({...reducers}));

function changeDate (date) {
    console.log('changed date', date);
}

function changeDay (day) {
    console.log('changed day', day);
}

function changeMonth (month) {
    console.log('changed month', month);
}

function changeYear (year) {
    console.log('changed year', year);
}

ReactDOM.render(
    <Provider store={store}>
        <App
            initialDate={'2020-02-29'}                   // String {Year-Month-Day} || Object {Date}
            onChangeDay={changeDay}     // Function {@param: current day of month}
            onChangeMonth={changeMonth} // Function {@param: current month}
            onChangeYear={changeYear}   // Function {@param: current year}
            onChangeDate={changeDate}   // Function {@param: current date}
            data={`<div>Some data</div>`} //Data for each date (should be changed on change date)
        />
    </Provider>,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
