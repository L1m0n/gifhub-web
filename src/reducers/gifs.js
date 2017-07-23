import * as actionTypes from '../actions/actionTypes';

const gifs = (state = {gifs: []}, action) => {
    switch (action.type) {
        case actionTypes.SET_GIFS:
            return Object.assign({}, state, {
                gifs: action.gifs.gifs
            });
        case actionTypes.SET_QUERY:
            return Object.assign({}, state, {query: action.query});
        case actionTypes.SET_OFFSET:
            return Object.assign({}, state, {offset: action.offset});
        case actionTypes.SET_SINGLE_GIF:
            return Object.assign({}, state, {
                singleGif: action.gif
            });
        default:
            return state;
    }
};

export default gifs;