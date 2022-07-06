import { useState, createContext } from 'react';
import { useHistory } from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [Auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    const setLogin = () => {
        toggleAuth({
            isAuth: true,
            user: null,
        });
        history.push('/recepten')
    };

    const setLogout = () => {
        toggleAuth({
            isAuth: true,
            user: null,
        });
        history.push('/')
    };

    const contextData = {
        isAuth: Auth.isAuth,
        login: setLogin,
        logout: setLogout,
    }

    return (
            <AuthContext.Provider value={contextData}>
                {children}
            </AuthContext.Provider>
        );
}

export default AuthContextProvider;
