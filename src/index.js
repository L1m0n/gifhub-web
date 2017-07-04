import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const App = () => (
    <MuiThemeProvider>
        <div>
            <AppBar title="My AppBar" />
            <FloatingActionButton >
                <ContentAdd />
            </FloatingActionButton>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);