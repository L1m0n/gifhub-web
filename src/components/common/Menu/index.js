import React from 'react';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

const Menu = (props) => {
    return(
        <Drawer
            docked={false}
            open={props.open}
            onRequestChange={props.onRequestChange}
        >
            <Link className="menu__item" to="/"><MenuItem onTouchTap={props.onTouchTap}>Home</MenuItem></Link>
            <Link className="menu__item" to="/gif-preview"><MenuItem onTouchTap={props.onTouchTap}>Menu Item 2</MenuItem></Link>
        </Drawer>
    )
};

export default Menu;