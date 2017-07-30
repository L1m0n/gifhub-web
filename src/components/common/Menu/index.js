import React from 'react';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';

class Menu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            open: false,
            menu: {
                home: 'Home',
                animals: [
                    'Cat',
                    'Dog',
                    'Goat',
                    'Monkey',
                    'Otter',
                    'Panda',
                    'Rabbit',
                    'Sloth',
                    'cow'
                ]
            }
        }
    }

    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };

    _renderMenu() {
        const menu = [];
        let keys = Object.keys(this.state.menu).map( key => {

            if (typeof this.state.menu[key] === 'string') {
                //console.log(1);
                return (
                    <Link className="menu__item" to="/">
                        <ListItem onTouchTap={this.props.onTouchTap}>
                            Home
                        </ListItem>
                    </Link>
                );
            }
        });
        console.log(keys);
    }

    componentDidMount() {
        this._renderMenu();
    }

    render() {
        return (
            <Drawer
                docked={false}
                open={this.props.open}
                onRequestChange={this.props.onRequestChange}
            >
                <List>
                    <Link className="menu__item" to="/">
                        <ListItem onTouchTap={this.props.onTouchTap}>
                            Home
                        </ListItem>
                    </Link>
                    <Link className="menu__item" to="/signin">
                        <ListItem onTouchTap={this.props.onTouchTap}>
                            Login
                        </ListItem>
                    </Link>
                    <ListItem
                        primaryText="Animals"
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="Cat"
                            />,
                            <ListItem
                                key={2}
                                primaryText="Dog"
                            />,
                            <ListItem
                                key={3}
                                primaryText="Goat"
                            />,
                            <ListItem
                                key={4}
                                primaryText="Monkey"
                            />
                        ]}
                    />
                </List>
            </Drawer>
        )
    }
}

export default Menu;