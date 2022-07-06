import React, {useContext} from 'react';
import { NavLink} from "react-router-dom";
import AuthContext from '../AuthContext';
import './navigation.css'

function Navigation() {
    const { isAuth } = useContext(AuthContext);

    return <nav>
        <img src="/" alt="logo"/>
        <ul>
            <li className="navbar"><NavLink exact to="/">Home</NavLink></li>
            { isAuth && <li className="navbar"><NavLink to="/recepten">Recipes</NavLink></li> }
            <li className="navbar"><NavLink to="/contact">Contact</NavLink></li>
            { !isAuth && <li className="navbar"><NavLink to="/registreren">Sign-Up</NavLink></li> }
            { !isAuth && <li className="navbar"><NavLink to="/inloggen">Sign-In</NavLink></li> }
            {/*{ isAuth && <li className="navbar"><NavLink to="/profiel">Profile</NavLink></li> }*/}
            {/*{ isAuth && <li className="navbar">Log-Out</li>}*/}
        </ul>
    </nav>
}

export default Navigation;
