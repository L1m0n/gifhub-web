import React from 'react';
import Dialog from 'material-ui/Dialog';
import GifPreview from '../GifPreview';

const GifPopup = (props) => {
    return(
        <div>
            <Dialog
                children={<GifPreview/>}
                repositionOnUpdate={false}
                modal={false}
                open={props.open}
                onRequestClose={props.close}
                bodyStyle={{
                    padding: 0
                }}
                contentStyle={{
                    padding: 0,
                    paddingTop: 48,
                    width: 'max-content',
                    maxWidth: 'none',
                    transform: 'none'
                }}
                style={{
                    paddingTop: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                overlayStyle={{
                    background: 'rgba(0, 0, 0, 0.7)'
                }}
            />
        </div>
    )
};


export default GifPopup;