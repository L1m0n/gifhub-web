import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import GifBar from '../GifBar';
import Snackbar from 'material-ui/Snackbar';
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
                <div className="preview__wrapper">

                    {this.props.gif &&
                    <Card>
                        <CardHeader
                            className="preview__header"
                            style={styles.header}
                            expandable={false}
                        >
                            <GifBar
                                className='gif__bar gif__bar--preview'
                                showSnackbar={this.handleTouchTap.bind(this)} gif={this.props.gif}
                            />
                        </CardHeader>
                        <CardMedia>
                            <img src={this.props.gif.original} alt=""/>
                        </CardMedia>
                    </Card>
                    }
                </div>
                <Snackbar
                    open={this.state.open}
                    message="URL copied!"
                    autoHideDuration={2000}
                    style={{textAlign: 'center'}}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

const styles = {
    header: {
        padding: 0
    }
};

export default presenter;