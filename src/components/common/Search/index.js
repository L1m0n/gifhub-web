import {connect} from 'react-redux';
import presenter from './presenter';
import { withRouter } from 'react-router-dom'
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

const Search =  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(presenter));

export default Search;