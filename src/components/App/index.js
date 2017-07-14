import React from 'react';
import GifList from '../common/GifList';
import Header from '../common/Header'

const App = ({children}) => {
    return(
        <div>
            <Header/>
            {children}
            <GifList/>
        </div>
    )
};

export default App;