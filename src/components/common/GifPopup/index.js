import React from 'react';
import Dialog from 'material-ui/Dialog';
import GifPreview from '../GifPreview';

const GifPopup = (props) => {
    return(
        <div>
            <Dialog
                styles={{
                    paddingTop: 40
                }}
                modal={false}
                open={props.open}
                onRequestClose={props.close}
            >
            <GifPreview/>
            </Dialog>
        </div>
    )
};

export default GifPopup;