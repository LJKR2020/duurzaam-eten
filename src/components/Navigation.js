import React from 'react';
import { NavLink} from "react-router-dom";
import { useAuth } from '../AuthContext';

function Navigation() {
    let { isAuth } = useAuth();

    return <nav>
        <img src="/" alt="logo"/>
        <ul>
            <li className="navbar"><NavLink exact to="/">Home</NavLink></li>
            { isAuth && <li className="navbar"><NavLink to="/recepten">Recepten</NavLink></li> }
            <li className="navbar"><NavLink to="/contact">Contact</NavLink></li>
            { !isAuth && <li className="navbar"><NavLink to="/registreren">Registreren</NavLink></li> }
            { !isAuth && <li className="navbar"><NavLink to="/inloggen">Inloggen</NavLink></li> }
            { isAuth && <li className="navbar"><NavLink to="/profiel">Persoonlijke pagina</NavLink></li> }
            { isAuth && <li className="navbar">Uitloggen</li>}
        </ul>
    </nav>
}

export default Navigation;
