import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './config/configureStore';
import App from './components/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchPage from './components/pages/SearchPage';
import GifList from './components/common/GifList';

const store = configureStore({
    data: {
        query: 'cat'
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={SearchPage}/>
                        <Route  path="/asd" component={GifList}/>
                    </Switch>
                </App>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
