import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Menu = (props) => {
    return(
        <Drawer
            docked={false}
            open={props.open}
            onRequestChange={props.onRequestChange}
        >
            <MenuItem onTouchTap={props.onTouchTap}>Menu Item</MenuItem>
            <MenuItem onTouchTap={props.onTouchTap}>Menu Item 2</MenuItem>
        </Drawer>
    )
};

export default Menu;