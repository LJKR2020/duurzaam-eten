import React, {useContext} from 'react';
import { NavLink} from 'react-router-dom';
import AuthContext from '../AuthContext';
import './Navigation.css';
import logo from './../assets/Bestek.png'

function Navigation() {
    const isAuth = useContext(AuthContext);

    return <nav>
        <ul>
            <li className='navbar'><NavLink exact to='/'>Home</NavLink></li>
            { isAuth && <li className='navbar'><NavLink to='/search-for-recipes'>Recipes</NavLink></li> }
            <li className='navbar'><NavLink to='/contact'>Contact</NavLink></li>
            { !isAuth && <li className='navbar'><NavLink to='/signup'>Sign-Up</NavLink></li> }
            { !isAuth && <li className='navbar'><NavLink to='/signin'>Sign-In</NavLink></li> }
            { isAuth && <li className='navbar'><NavLink to='/profile'>Profile</NavLink></li> }
            { isAuth && <li className='navbar'>Log-Out</li>}
        </ul>
    </nav>
}

export default Navigation;
