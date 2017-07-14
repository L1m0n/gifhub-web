import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

class presenter extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            opened: false
        }
    }
    
    render(){
        return(
            <form className={this.state.opened ? 'search search-opened' : 'search'}>
                <IconButton onTouchTap={() => this.setState({opened: !this.state.opened})} className="search__icon" style={{padding: 0, height: 36, width: 36}}>
                    <ActionSearch style={{width: 36, height: 36}}  color={this.state.opened ? '#BDBDBD' : '#fff'} />
                </IconButton>
                <input type="text" className="search__input"/>
            </form>
        )
    }
}

export default presenter;