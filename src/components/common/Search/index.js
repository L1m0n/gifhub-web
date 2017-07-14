import {connect} from 'react-redux';
import presenter from './presenter';
import setQuery from '../../../actions/setQuery';
import fetchGifs from '../../../actions/fetchGifs';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setQuery:  (query) => {
            dispatch(setQuery(query));
        },
        search: (offset, category, query) => {
            dispatch(fetchGifs(offset, category, query));
        }
    }
};

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter);

export default Search;