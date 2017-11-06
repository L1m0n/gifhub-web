import React from 'react';
import GifBar from '../GifBar';
require('../../../assets/css/gif-preview.css');

class presenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        return (
            <div className="gif__preview">
                <GifBar
                    className='gif__bar gif__bar--preview'
                    showSnackbar={this.handleTouchTap.bind(this)} gif={this.props.gif}
                />
                <img src={this.props.gif.original} alt=""/>
            </div>
        )
    }
}

export default presenter;