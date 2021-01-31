import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Route, Switch } from "react-router";

import ChatPage from '../ChatPage/Chat.js'
import LandingPage from '../LandingPage/Landing.js'
import HomePage from '../HomePage/Home.js'
// import SiderDemo from '../layout/Layout.js'

const Routes =()=>{
    return (
    <Router>
        <div>
            <Switch>
                <Route  exact path='/' component={HomePage} />
                <Route   path='/chat' component={ChatPage} />
                <Route   path="/landing" component={LandingPage}/> 
            </Switch>
        </div>
    </Router>
    );
};

export default Routes;