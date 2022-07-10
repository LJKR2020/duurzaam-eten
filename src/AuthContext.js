import {useState, createContext, useContext} from 'react';
import {useHistory} from 'react-router-dom';

const AuthContext = createContext(false);

export function useAuth() {
    return useContext(AuthContext);
}

function AuthContextProvider({children}) {
    const history = useHistory();

    const [Auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
    });

    const setLogin = () => {
        toggleAuth({
            isAuth: true,
            user: true,
        });
        console.log(Auth)
        history.push('/search-for-recipes')
    };

    const setLogout = () => {
        console.log('test')
        toggleAuth({
            isAuth: false,
            user: false,
        });
        localStorage.removeItem('token')
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

export default AuthContextProvider
