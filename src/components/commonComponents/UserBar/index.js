import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
require('../../../assets/css/userbar.css');

const UserBar = () => {
    return (
        <div className="userbar">
            <IconMenu
                iconButtonElement={
                    <IconButton
                        iconStyle={styles.icon}
                        iconClassName="fa fa-user-circle"
                        hoveredStyle={styles.hoveredStyle}
                    />}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Collection" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        </div>
    )
};

const styles = {
    icon: {
        color: '#fff',
        fontSize: 25
    },
    hoveredStyle: {
        opacity: 0.8
    }
};

export default UserBar;