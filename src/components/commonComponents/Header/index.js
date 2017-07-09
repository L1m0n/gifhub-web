import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('../../../assets/css/header.css');
injectTapEventPlugin();

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render(){
        return (
            <header className="header">
                <AppBar
                    iconStyleLeft={styles.menuIcon}
                    style={styles.appBar}
                    className='header__appbar'
                    children={<div>adfdfsdfsd</div>}
                    iconClassNameLeft="fa fa-bars"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </header>
        )
    }
}

const styles = {
    appBar: {
        backgroundColor: '#03A9F4'
    },
    menuIcon: {
        color: '#FFFFFF'
    }
};
export default Header;