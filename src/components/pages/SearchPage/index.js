import React from 'react';
import GifList from '../../common/GifList';
import Navigation from '../../common/Navigation';

const SearchPage = (props) => {
    return (
        <div>
            <Navigation/>
            <GifList/>
        </div>
    );
};

export default SearchPage;