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
                    <img src="/" alt="logo"/>
                    <ul>
                        <li className="navbar"><NavLink exact to="/">Home</NavLink></li>
                        <li className="navbar"><NavLink to="/recepten">Recepten</NavLink></li>
                        <li className="navbar"><NavLink to="/contact">Contact</NavLink></li>
                        <li className="navbar"><NavLink to="/registreren">Registreren</NavLink></li>
                        <li className="navbar"><NavLink to="/inloggen">Inloggen</NavLink></li>
                        {/*<li className="navbar"><NavLink to="/profiel">Persoonlijke pagina</NavLink></li>*/}
                    </ul>
                </nav>
                <div className="mid-screen">
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

            </div>
        </Router>
    );
}

export default App;
