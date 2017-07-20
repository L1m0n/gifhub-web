import React from 'react';
import Header from '../common/Header';
import SearchPage from '../pages/SearchPage';
import 'font-awesome/css/font-awesome.min.css';

const App = ({children}) => {
    return(
        <div>
            <Header/>
            {children}
            <SearchPage/>
        </div>
    )
};

export default App;