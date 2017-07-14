import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const AuthorizationButtons = (props) => {
    return (
        <div className="authorization-buttons">
            <RaisedButton label="Sign up" backgroundColor='#FF4081' labelColor="#fff" />
            <span>or</span>
            <RaisedButton label="Login" backgroundColor='#FFFFFF' labelColor="#333" />
        </div>
    )
};

export default AuthorizationButtons;