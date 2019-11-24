import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import Home from '../pages/Home';
import Feeds from '../pages/Feeds';
import CreateUser from '../pages/CreateUser';
import EditPost from '../pages/EditPost';
import Error from '../pages/Error'
import history from '../history';



const App = () => {
    
    return(
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/feeds/" component={Feeds} />
                    <Route exact path="/createuser" component={CreateUser} />
                    <Route exact path="/editpost/" component={EditPost} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    )
}

export default App