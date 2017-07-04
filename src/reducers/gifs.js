import * as actionTypes from '../actions/actionTypes';

const gifs = (state = {gifs: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_GIFS:
            return Object.assign({}, state, {
                gifs: state.gifs.concat(action.gifs.gifs)
            });
        default:
            return state;
    }
};

export default gifs;