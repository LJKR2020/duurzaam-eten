// https://reactrouter.com/web/api/Redirect
import { Route, Redirect, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) => {
    const location = useLocation();

    const user = sessionStorage.getItem('user');

    return user ? (
        <Route {...props}>{ children }</Route>
    ) : (
        <Redirect
            to={{
                pathname: '/inloggen',
                state: { from: location },
            }}
        />
    );
};

export default PrivateRoute;
