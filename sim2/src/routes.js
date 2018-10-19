import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wizard from './components/Wizard/Wizard';
import Dashboard from './components/Dashboard/Dashboard';

export default 
    <Switch>
        <Route exact path='/wizard' component={Wizard} />
        <Route path='/wizard/:id' component={Wizard}/>
        <Route path='/' component={Dashboard}/>
    </Switch>