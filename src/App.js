import './App.css';
import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Contact from './pages/Contactpage';
import Profile from './pages/ProfilePage';
import RecipeSearch from './pages/RecipeSearchPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navigation from './components/Navigation';
import AuthContextProvider from './AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
    const { isAuth } = useContext(AuthContextProvider);

    return (
        <AuthContextProvider>
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
        </AuthContextProvider>

    );
}

export default App;
