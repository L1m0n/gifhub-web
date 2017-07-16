import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import Gif from '../Gif';

class presenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    componentDidMount(){
        this.props.fetchGifs(-25, 'gifs', 'dog');
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

    render(){
        return(
            <div className="gif-list">
                {this.props.gifs && this.props.gifs.map((gif) => {
                    return (
                        <Gif
                            key={gif.id}
                            gif={gif}
                            showSnackbar={this.handleTouchTap.bind(this)}
                        />
                    )
                })}
                <Snackbar
                    open={this.state.open}
                    message="Url copied!"
                    autoHideDuration={2000}
                    style={{textAlign: 'center'}}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export default presenter;