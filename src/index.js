import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calendar date={new Date()}/>, document.getElementById('react-calendar'));

serviceWorker.unregister();
