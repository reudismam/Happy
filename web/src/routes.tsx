import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Orphanages from './pages/Orphanages';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

const Error404 = () => { 
    return (
     <h1>Error 404</h1>
    );
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app*" component={Orphanages} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
                <Route path="*" component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;