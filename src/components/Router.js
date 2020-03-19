import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import FrontPage from './FrontPage';
import RoutineList from './RoutineList';
import Routine from './Routine';
import Workout from './Workout';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route exact path="/routines" component={RoutineList} />
                <Route path="/routines/:id" component={Routine} />
                <Route path="/workouts/:id" component={Workout} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;