import {SET_GIFS} from './actionTypes';

const setGifs = (gifs) => {
    return {
        type: SET_GIFS,
        gifs
    }
};

export default setGifs;