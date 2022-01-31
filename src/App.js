import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Homepage from './pages/Homepage';
import Contact from './pages/Contactpage';
import Profile from './pages/ProfilePage';
import RecipeSearch from './pages/RecipeSearchPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/inloggen">Inloggen</NavLink></li>
                        <li><NavLink to="/registreren">Registreren</NavLink></li>
                        <li><NavLink to="/recepten">Recepten</NavLink></li>
                        <li><NavLink to="/profiel">Persoonlijke pagina</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/inloggen">
                        <SignIn />
                    </Route>
                    <Route path="/registreren">
                        <SignUp />
                    </Route>
                    <Route path="/recepten">
                        <RecipeSearch />
                    </Route>
                    <Route path="/profiel">
                        <Profile />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
