import React from 'react';
import GifList from '../commonComponents/GifList';
import Header from '../commonComponents/Header'

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