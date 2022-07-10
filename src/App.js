import './App.css';
import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contact from './pages/Contactpage';
import Profile from './pages/ProfilePage';
import RecipeSearch from './pages/RecipeSearchPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Navigation from './components/Navigation';
import AuthContextProvider from './AuthContext';
import PrivateRoute from './components/PrivateRoute';
import logo from "./assets/Bestek.png";

function App() {
    const isAuth = useContext(AuthContextProvider);

    return (
        <AuthContextProvider>
            <Router>
                <div className='padding'>
                    <header className='navigationBar'>
                        <img src={logo} alt='logo' className='logo'/>
                        <Navigation />
                    </header>

                    <main className='mid-screen'>
                        <Switch>

                            <Route exact path='/'>
                                <Homepage />
                            </Route>

                            { !isAuth && <Route path='/signin'>
                                <SignIn />
                            </Route>}

                            { !isAuth && <Route path='/signup'>
                                <SignUp />
                            </Route>}

                            <PrivateRoute path='/search-for-recipes'>
                                <RecipeSearch />
                            </PrivateRoute>

                            <PrivateRoute path='/profile'>
                                <Profile />
                            </PrivateRoute>

                            <Route path='/contact'>
                                <Contact />
                            </Route>

                        </Switch>
                    </main>
                    <footer className='voetje'>
                        <p>Copyright of Hogeschool Novi</p>
                    </footer>
                </div>
            </Router>
        </AuthContextProvider>

    );
}

export default App;
