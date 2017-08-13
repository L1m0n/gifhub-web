import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './config/configureStore';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import fetchGifs from './actions/fetchGifs';

const store = configureStore({
    data: {
        query: 'cats'
    }
});

store.dispatch(fetchGifs(0, 'gifs', 'cats'));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
