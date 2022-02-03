import { useState, createContext, useContext, useEffect } from 'react';

const AuthContext = createContext(false);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        setIsAuth(!!user);
    });

    const setLogin = () => {
        setIsAuth(true);
    };

    const setLogout = () => {
        setIsAuth(false);
        const user = null;
        sessionStorage.setItem('user', null);
    };

    return <AuthContext.Provider value={{ isAuth, setLogin, setLogout }}>
        { children }
    </AuthContext.Provider>
}

export default AuthProvider;
