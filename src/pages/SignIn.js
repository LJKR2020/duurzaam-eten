import React, { useState} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import "./basic-form.css";

import { useAuth } from '../AuthContext';

const { REACT_APP_AUTH_API_URL } = process.env;

function SignIn() {
    const [account, setAccount] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const { setLogin } = useAuth();

    const doSubmit = async(data) => {
        setIsLoading(true);

        await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signin`, {
            "username": data.username,
            "password" : data.password,
        })
            .then((res) => {
                setAccount(res.data);
                setLogin(true);
                sessionStorage.setItem('user', JSON.stringify(res.data));
            })
            .catch(err => {
                setHasError(true);
            })
            .finally(() => {
                setIsLoading(false);

            });
    };

    // const isValid = (username, password) => {
    //     if (password.length < 6) {
    //         // setError()
    //     }
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        const username = e.target[0].value;
        const password = e.target[1].value;

        // isValid({username, password});

        doSubmit({username, password});
    };

    if (account) {
        return <Redirect to="/recepten" />;
    }

    return (
        <>
            {/*als error dan zeggen gegevens ongeldig*/}
            <div className="basic-form">
                <h1>Inloggen</h1>
                <form action="/" onSubmit={onSubmit}>
                    <label htmlFor="username">
                        <input type="text" id="username" placeholder="Gebruikersnaam"/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" id="password" minLength="6" placeholder="Wachtwoord"/>
                    </label>
                    <button type="submit">Inloggen</button>
                </form>
            </div>
        </>
    )
}

export default SignIn;
