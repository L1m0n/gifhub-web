import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const AuthorizationButtons = (props) => {
    return (
        <div className="authorization-buttons">
            <RaisedButton label="Sign up" secondary={true} />
            <span>or</span>
            <RaisedButton label="Login" secondary={true} />
        </div>
    )
};

export default AuthorizationButtons;