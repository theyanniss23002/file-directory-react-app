import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './css/index.scss';
import { Provider, ReactReduxContext } from 'react-redux';
import { store } from './store';
import CssBaseline from '@material-ui/core/CssBaseline';

render(
    <Provider store={store} context={ReactReduxContext}>
        <CssBaseline />
        <App />
    </Provider>,
    document.getElementById('root')
);
