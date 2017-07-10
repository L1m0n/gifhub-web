import React from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from '../Menu';
import UserBar from '../UserBar';
import AuthorizationButtons from '../AuthorizationButtons';
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
                    children={
                        <div>
                            <AuthorizationButtons/>
                            <UserBar/>
                        </div>
                    }
                    iconClassNameLeft="fa fa-bars"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Menu
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    onTouchTap={this.handleClose}
                />

            </header>
        )
    }
}

const styles = {
    appBar: {
        backgroundColor: '#03A9F4'
    },
    menuIcon: {
        color: '#FFFFFF',
        marginTop: 0
    }
};
export default Header;