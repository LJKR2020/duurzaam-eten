import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Homepage from './pages/Homepage';
import Contact from './pages/Contactpage';
import Profile from './pages/ProfilePage';
import RecipeSearch from './pages/RecipeSearchPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Navigation from './components/Navigation';

import AuthContext from './AuthContext';
import PrivateRoute from './components/PrivateRoute';

import { useAuth } from './AuthContext';

function App() {
    const { isAuth } = useAuth();

    return (
        <AuthContext>
            <Router>
                <div>
                    <Navigation />

                    <div className="mid-screen">
                        <Switch>

                            <Route exact path="/">
                                <Homepage />
                            </Route>

                            { !isAuth && <Route path="/inloggen">
                                <SignIn />
                            </Route>}

                            { !isAuth && <Route path="/registreren">
                                <SignUp />
                            </Route>}

                            <PrivateRoute path="/recepten">
                                <RecipeSearch />
                            </PrivateRoute>

                            <PrivateRoute path="/profiel">
                                <Profile />
                            </PrivateRoute>

                            <Route path="/contact">
                                <Contact />
                            </Route>

                        </Switch>
                    </div>

                </div>
            </Router>
        </AuthContext>

    );
}

export default App;
