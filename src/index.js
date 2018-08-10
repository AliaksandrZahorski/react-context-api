import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {sample} from './reducers';

import {App} from './app'

const title = '2My Minimal React Webpack Babel Setup';

const rootReducer = combineReducers({
    sample,
    form: formReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('app')
);

module.hot.accept();