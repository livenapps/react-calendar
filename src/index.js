import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from "redux";
import calendarReducer from './containers/App/reducer';
import App from './containers/App';
import Sample from './components/SampleData'
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({calendarReducer}));

ReactDOM.render(
    <Provider store={store}>
        <App
            initialDate={''}  // String {Year-Month-Day} || Object {Date}
            onChange={''}               // Function {@param: current day of month}
            sidebarData={ <Sample/> }   //Sidebar data
        />
    </Provider>,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
