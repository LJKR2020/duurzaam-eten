import React, {useState} from 'react';
import axios from 'axios';
import "./basic-form.css";

const { REACT_APP_AUTH_API_URL } = process.env;

function SignUp() {
    // const [account, setAccount] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [invalidPasswords, setInvalidPasswords] = useState(false);

    async function signUp() {
        try {
            const response = await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signup`, {
                // "username": data.username,
                // "email": data.email,
                // "password" : data.password,
                // "role": ["user"]
            })
            console.log(response)
        } catch (e) {
            console.error(e => {setHasError(true)})
            console.log(hasError)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const passwordCheck = e.target[3].value;

        if (password !== passwordCheck) {
            setInvalidPasswords(true);
        } else {
            signUp({username, email, password});
        }
    };

    // if (account) {
    //     return <Redirect to="/inloggen" />;
    // }

    return (
        <>
            <div className="basic-form">
                <h1>Sign-up</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="username">
                        <input type="text" id="username" placeholder="Username"/>
                    </label>
                    <label htmlFor="email">
                        <input type="email" id="email" placeholder="E-mail address"/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" id="password" placeholder="Password"/>
                    </label>
                    <label htmlFor="password-check">
                        <input type="password" id="password-check" placeholder="Repeat password"/>
                    </label>
                    { invalidPasswords && <p className="error">Passwords aren't the same</p>}
                    <button type="submit">Sign-up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
