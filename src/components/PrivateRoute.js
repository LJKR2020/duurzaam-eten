// https://reactrouter.com/web/api/Redirect
import { Route, Redirect, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) => {
    const location = useLocation();

    const token = localStorage.getItem('token');
    console.log(token);
    return token ? (
        <Route {...props}>{ children }</Route>
    ) : (
        <Redirect
            to={{
                pathname: '/signin',
                state: { from: location },
            }}
        />
    );
};

export default PrivateRoute;
