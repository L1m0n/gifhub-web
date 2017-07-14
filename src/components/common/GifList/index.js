import fetchGifs from '../../../actions/fetchGifs';
import presenter from './presenter';
import {connect} from 'react-redux';
require('../../../assets/css/giflist.css');

const mapStateToProps = (state) => {
    return {
        gifs: state.data.gifs
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGifs: (offset, category, query) => {
            dispatch(fetchGifs(offset, category, query));
        }
    }
};

const GifList = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default GifList;