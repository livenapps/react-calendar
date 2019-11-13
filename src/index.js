import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from "redux";

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import App from './containers/App';

const store = createStore(combineReducers({...reducers}));

ReactDOM.render(
    <Provider store={store}>
        <App
            date={''}         // String {Year-Month-Day} || Object {Date}
            onChangeDay={''}     // Function {@param: current day of month}
            onChangeMonth={''} // Function {@param: current month}
            onChangeYear={''}   // Function {@param: current year}
            onChangeDate={''}   // Function {@param: current date}
        />
    </Provider>,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
