import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feeds from './pages/Feeds';
import CreateUser from './pages/CreateUser';
import EditPost from './pages/EditPost';
import Post from './pages/Post';
import SignIn from './pages/SignIn';
import Error from './pages/Error'
import history from './history';
import NavBar from './components/NavBar';
import CreateGif from './pages/CreateGif';
import ViewSpecificPost from './pages/ViewSpecificPost';




const App = () => {
    
    return(
        <div>
            <Router history={history}>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/feeds/" component={Feeds} />
                    <Route exact path="/createuser" component={CreateUser}/>
                    <Route exact path="/post/specific/:id" component={ViewSpecificPost} />
                    <Route exact path="/post/new" component={Post} />
                    <Route exact path="/gif/new" component={CreateGif} />
                    <Route exact path="/post/edit/:id" component={EditPost} />
                    <Route exact path="/signin/" component={SignIn} />
                    <Route component={Error} />
                </Switch>
            </Router>
        </div>
    )
}

export default App