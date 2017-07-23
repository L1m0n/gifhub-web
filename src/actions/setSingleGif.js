import {SET_SINGLE_GIF} from './actionTypes';

const setSingleGif = (gif) => {
    return {
        type: SET_SINGLE_GIF,
        gif
    }
};

export default setSingleGif;