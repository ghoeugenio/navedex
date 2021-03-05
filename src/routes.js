import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdicionarNaver from './pages/AdicionarNaver';
import EditarNaver from './pages/EditarNaver';
import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/users/login' component={Login}/>
                <Route path='/navers' exact component={Home}/>
                <Route path='/navers/create' exact component={AdicionarNaver}/>
                <Route path='/navers/update' exact component={EditarNaver}/>
            </Switch>
        </BrowserRouter>
    );
}