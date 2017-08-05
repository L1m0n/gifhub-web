import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import Gif from '../Gif';
import GifPopup from '../GifPopup';

class presenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            popupOpen: false
        }
    }
    componentDidMount(){
        if (!this.props.gifs) {
            this.props.fetchGifs(0, 'gifs', 'dog');
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

    openPopup = () => {
        this.setState({popupOpen: true});
    };

    closePopup = () => {
        this.setState({popupOpen: false});
    };

    render(){
        return(
            <div className="gif-list">
                {this.props.gifs && this.props.gifs.map((gif) => {
                    return (
                        <Gif
                            key={gif.id}
                            gif={gif}
                            setSingleGif={this.props.setSingleGif}
                            showPopup={this.openPopup.bind(this)}
                            showSnackbar={this.handleTouchTap.bind(this)}
                        />
                    )
                })}
                <Snackbar
                    open={this.state.open}
                    message="URL copied!"
                    autoHideDuration={2000}
                    style={{textAlign: 'center'}}
                    onRequestClose={this.handleRequestClose}
                />
                <GifPopup
                    open={this.state.popupOpen}
                    close={this.closePopup.bind(this)}
                />
            </div>
        )
    }
}

export default presenter;