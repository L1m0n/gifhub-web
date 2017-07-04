import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './config/configureStore';
import GifList from './components/commonComponents/GifList';
import 'font-awesome/css/font-awesome.min.css';

const store = configureStore({});

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <div>
                <GifList />
            </div>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);