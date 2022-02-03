import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import "./basic-form.css";

const { REACT_APP_AUTH_API_URL } = process.env;

function SignUp() {
    const [account, setAccount] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [invalidPasswords, setInvalidPasswords] = useState(false);

    const doSubmit = async(data) => {
        setIsLoading(true);

        await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signup`, {
            "username": data.username,
            "email": data.email,
            "password" : data.password,
            "role": ["user"]
        })
            .then((res) => {
                setAccount(res.data.message);
            })
            .catch(err => {
                setHasError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const passwordCheck = e.target[3].value;

        // Validation function eventueel
        // If valid dan doSubmit else set error

        if (password !== passwordCheck) {
            setInvalidPasswords(true);
        } else {
            doSubmit({username, email, password});
        }
    };

    if (account) {
        return <Redirect to="/inloggen" />;
    }

    return (
        <>
            <div className="basic-form">
                <h1>Registreren</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">
                        <input type="text" id="username" placeholder="Gebruikersnaam"/>
                    </label>
                    <label htmlFor="email">
                        <input type="email" id="email" placeholder="E-mailadres"/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" id="password" placeholder="Wachtwoord"/>
                    </label>
                    <label htmlFor="password-check">
                        <input type="password" id="password-check" placeholder="Herhaal het wachtwoord"/>
                    </label>
                    { invalidPasswords && <p className="error">Wachtwoorden zijn niet gelijk</p>}
                    <button type="submit">Registreren</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
