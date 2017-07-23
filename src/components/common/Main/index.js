import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
import GifPage from '../../pages/GifPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={SearchPage}/>
            <Route path='/gif-preview' component={GifPage}/>
            <Route/>
        </Switch>
    </main>
);

export default Main;