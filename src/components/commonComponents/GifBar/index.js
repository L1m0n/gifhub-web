import React from 'react';
import IconButton from 'material-ui/IconButton';

const GifBar = () => {
    return (
        <div className="gif__bar">
            <IconButton title="Download" iconStyle={{color: '#673AB7'}} iconClassName="fa fa-download" />
            <IconButton title="Add to collection" iconStyle={{color: '#673AB7'}} iconClassName="fa fa-plus-circle" />
            <IconButton title="Share on facebook" iconStyle={{color: '#673AB7'}} iconClassName="fa fa-share-alt" />
        </div>
    )
};

export default GifBar;