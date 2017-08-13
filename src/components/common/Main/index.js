import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
import SignUpPage from '../../pages/SignUpPage';
import SignInPage from '../../pages/SignInPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={SearchPage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Route path='/signin' component={SignInPage}/>
            <Route/>
        </Switch>
    </main>
);

export default Main;