import React from 'react';

class presenter extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        //console.log(this.props.state);
        this.props.fetchGifs(0, 'gifs', 'cats');
    }

    render(){
        return(
            <div className="gif-list">
                {this.props.gifs.map((gif) => {
                    return (
                        <div key={gif.id} style={{ width: 250, height: 250, backgroundImage: 'url('+ gif.gif +')'}}></div>
                    )
                })}
            </div>
        )
    }
}

export default presenter;