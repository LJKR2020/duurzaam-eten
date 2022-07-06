import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./basic-form.css";
import AuthContextProvider from "../AuthContext";
import {AuthContext, useAuth} from '../AuthContext';

const { REACT_APP_AUTH_API_URL } = process.env;

function Login() {
    // const [account, setAccount] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const { setLogin } = useContext(AuthContext);

    async function LoginRequest() {
        try {
            const response = await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signin`, {
                        // username: username,
                        // password: password,
                    })
            console.log(response);
        } catch (e) {
            console.error(e => {setHasError(true)})
            console.log(hasError);
        }
    }

    LoginRequest();

    // const isValid = (username, password) => {
    //     if (password.length < 6) {
    //         // setError()
    //     }
    // }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //
    //     const username = e.target[0].value;
    //     const password = e.target[1].value;
    //
    //     // isValid({username, password});
    //
    //     doSubmit({username, password});
    // };
    //
    // if (account) {
    //     return <Redirect to="/recepten" />;
    // }

    return (
        <>
            <div className="basic-form">
                <h1>Login Page</h1>
                <form action="/">
                    <label htmlFor="username">
                        <input type="text" id="username" placeholder="Username"/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" id="password" minLength="6" placeholder="Password"/>
                    </label>
                    <button type="button" onClick={setLogin}>Log me in!</button>
                </form>
            </div>
        </>
    )
}

export default Login;
