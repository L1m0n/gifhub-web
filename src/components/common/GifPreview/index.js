import {connect} from 'react-redux';
import presenter from './presenter';

const mapStateToProps = (state) => {
    return {
        gif: state.data.singleGif
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const GivPreview = connect(
    mapStateToProps,
    mapDispatchToProps

)(presenter);

export default GivPreview;
