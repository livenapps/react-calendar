import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import * as serviceWorker from './serviceWorker';
const date = '02.29.2020'; // month.day.year // not required

ReactDOM.render(
    <Calendar
        date={date}
        onChangeDay={''}
        onChangeMonth={''}
        onChangeYear={''}
        onChange={''}
    />,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
