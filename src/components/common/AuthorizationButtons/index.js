import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

const AuthorizationButtons = (props) => {
    return (
        <div className="authorization-buttons">
            <Link to="/signup">
                <RaisedButton label="Sign up" backgroundColor='#FF4081' labelColor="#fff" />
            </Link>
            <span>or</span>
            <Link to="/signin">
                <RaisedButton label="Login" backgroundColor='#FFFFFF' labelColor="#333" />
            </Link>
        </div>
    )
};

export default AuthorizationButtons;