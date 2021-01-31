import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Route, Switch } from "react-router";

import ChatPage from '../ChatPage/Chat.js'
import LandingPage from '../LandingPage/Landing.js'
import HomePage from '../HomePage/Home.js'
import CookingPage from '../CookingPage/cooking.js'
import PaintingPage from '../PaintingPage/painting.js'
import OnlinePage from '../OnlinePeoplePage/online.js'
// import SiderDemo from '../layout/Layout.js'

const Routes =()=>{
    return (
    <Router>
        <div>
            <Switch>
                <Route  exact path='/' component={HomePage} />
                <Route   path='/chess' component={ChatPage} />
                <Route   path="/landing" component={LandingPage}/> 
                <Route   path="/cooking" component={CookingPage}/> 
                <Route   path="/painting" component={PaintingPage}/> 
                <Route   path="/online" component={OnlinePage}/> 
            </Switch>
        </div>
    </Router>
    );
};

export default Routes;