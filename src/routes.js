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
                <Route path='/' exact component={Login}/>
                <Route path='/home' exact component={Home}/>
                <Route path='/adicionar' exact component={AdicionarNaver}/>
                <Route path='/editar' exact component={EditarNaver}/>
            </Switch>
        </BrowserRouter>
    );
}