import React from 'react';
import IconButton from 'material-ui/IconButton';

const GifBar = () => {
    return (
        <div className="gif__bar">
            <IconButton title="Download" hoveredStyle={styles.hover} iconStyle={styles.icon} iconClassName="fa fa-download" />
            <IconButton title="Add to collection" hoveredStyle={styles.hover} iconStyle={styles.icon} iconClassName="fa fa-plus-circle" />
            <IconButton title="Share on facebook" hoveredStyle={styles.hover} iconStyle={styles.icon} iconClassName="fa fa-share-alt" />
        </div>
    )
};

const styles = {
    icon: {
        color: '#FFFFFF'
    },
    hover: {
        opacity: 0.8,
    }
};

export default GifBar;