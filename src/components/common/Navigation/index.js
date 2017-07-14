import {connect} from 'react-redux'
import presenter from './presenter';
import fetchGifs from '../../../actions/fetchGifs';

const mapStateToProps = (state) => {
    return {
        offset: state.data.offset,
        query: state.data.query
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (offset, category, query) => {
            dispatch(fetchGifs(offset, category, query));
        }
    }
};

const Navigation = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Navigation;