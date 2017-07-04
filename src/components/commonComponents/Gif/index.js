import React from 'react';
import FontIcon from 'material-ui/FontIcon';
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
                <FontIcon
                    size={30}
                    className="fa fa-search-plus fa-5x"
                />
            </div>
        )
    }
}

export default Gif;