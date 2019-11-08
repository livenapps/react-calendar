import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import App from './components/App';
import './components/App/reset.scss';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App
            date={''}
            onChangeDay={''}
            onChangeMonth={''}
            onChangeYear={''}
            onChange={''}
        />
    </Provider>,
    document.getElementById('react-calendar'));

serviceWorker.unregister();
