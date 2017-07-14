import {SET_OFFSET} from './actionTypes';

const setOffset = (offset) => {
    return {
        type: SET_OFFSET,
        offset
    }
};

export default setOffset;