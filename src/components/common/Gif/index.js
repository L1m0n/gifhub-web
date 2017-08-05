import React from 'react';
import GifBar from '../GifBar';
import IconButton from 'material-ui/IconButton';
import {Link} from 'react-router-dom';
import ActionZoomIn from 'material-ui/svg-icons/action/zoom-in';
require('../../../assets/css/gif.css');

class Gif extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
        this.showGif = this.showGif.bind(this);
    }

    showGif() {
        this.setState({
            loaded: true
        })
    }

    componentDidMount() {
        this.image = new Image();
        this.image.src = this.props.gif.gif;
        this.image.onload = () => {
            this.showGif();
        }
    }

    render() {
        return (
            <div className={this.state.loaded ? 'gif__wrapper gif__wrapper--visible' : 'gif__wrapper'}>
                <div
                    style={{backgroundImage: 'url(' + this.props.gif.gif + ')'}}
                    className="gif">
                </div>
                <div className="gif__overlay" >
                    <IconButton
                    title="Preview"
                    className="gif__zoom"
                    onTouchTap={()=> {
                        this.props.setSingleGif(this.props.gif);
                        this.props.showPopup();
                    }}
                    iconStyle={{
                        width: 50,
                        height: 50,
                        color: '#FF4081'
                    }}
                    style={{
                        width: 50,
                        height: 50,
                        marginTop: 55,
                        color: '#FF4081',
                        padding: 0
                    }}
                >
                        <ActionZoomIn/>

                </IconButton>
                </div>
                <GifBar className="gif__bar" showSnackbar={this.props.showSnackbar} gif={this.props.gif}/>
            </div>
        )
    }
}

export default Gif;