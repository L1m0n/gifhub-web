import React from 'react';
import IconButton from 'material-ui/IconButton';

const GifBar = (props) => {
    let share,
        copy,
        input;
    share = () => {
        return window.open('https://www.facebook.com/sharer/sharer.php?u=' + props.gif.url, 'Share on Facebook', 'width=600px, height=500px');
    };

    copy = () => {
        input.select();
        document.execCommand('copy');
        props.showSnackbar();
    };

    return (
        <div className={props.className}>
            <input ref={(i) => {input = i}}  className="copy-input" readOnly type="text" value={props.gif.gif} />
            <IconButton
                onTouchTap={()=>{copy()}}
                title="Copy URL"
                hoveredStyle={styles.hover}
                iconStyle={styles.icon}
                iconClassName="fa fa-chain" />
            <IconButton
                title="Download"
                hoveredStyle={styles.hover}
                iconStyle={styles.icon}
                iconClassName="fa fa-save" >
                <a className="download-button" href={props.gif.original}  download='gifhub'></a>
            </IconButton>
            <IconButton
                onTouchTap={(e)=>{copy(e)}}
                title="Add to collection"
                hoveredStyle={styles.hover}
                iconStyle={styles.icon}
                iconClassName="fa fa-plus-circle" />
            <IconButton
                onTouchTap={()=>{share()}}
                title="Share on facebook"
                hoveredStyle={styles.hover}
                iconStyle={styles.icon}
                iconClassName="fa fa-share-alt" />
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