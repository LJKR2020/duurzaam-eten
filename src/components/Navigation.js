import React, {useContext, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import AuthContext from '../AuthContext';
import './Navigation.css';
import {useAuth} from "../AuthContext";

function Navigation() {
    const isAuth = useAuth();
    const { logout } = useAuth();


    return <nav>
        <ul>
            <li className='navbar'><NavLink exact to='/'>Home</NavLink></li>
            { isAuth && <li className='navbar'><NavLink to='/search-for-recipes'>Recipes</NavLink></li> }
            <li className='navbar'><NavLink to='/contact'>Contact</NavLink></li>
            { !isAuth && <li className='navbar'><NavLink to='/signup'>Sign-Up</NavLink></li> }
            { !isAuth && <li className='navbar'><NavLink to='/signin'>Sign-In</NavLink></li> }
            { isAuth && <li className='navbar'><NavLink to='/profile'>Profile</NavLink></li> }
            { isAuth && <li className='navbar' onClick={logout}>Log-Out</li>}
        </ul>
    </nav>
}

export default Navigation;
