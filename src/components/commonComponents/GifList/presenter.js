import React from 'react';
import Gif from '../Gif';

class presenter extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.fetchGifs(0, 'gifs', 'dog');
    }

    render(){
        return(
            <div className="gif-list">
                {this.props.gifs && this.props.gifs.map((gif) => {
                    return (
                        <Gif
                            key={gif.id}
                            gif={gif}
                        />
                    )
                })}
            </div>
        )
    }
}

export default presenter;