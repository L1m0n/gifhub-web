import React from 'react';
import GifList from '../common/GifList';
import Header from '../common/Header';
import Navigation from '../common/Navigation';

const App = ({children}) => {
    return(
        <div>
            <Header/>
            <Navigation/>
            {children}
            <GifList/>
        </div>
    )
};

export default App;