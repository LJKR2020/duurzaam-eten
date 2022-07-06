import React, { useState } from 'react';
import axios from 'axios';
import "./basic-form.css";

const { REACT_APP_AUTH_API_URL } = process.env;

function Login() {
    // const [account, setAccount] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    // const { setLogin } = useContext(AuthContext);

    async function loginRequest() {
        try {
            const response = await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signin`, {
                        // username: data.username,
                        // password: data.password,
                    })
            console.log(response);
        } catch (e) {
            console.error(e => {setHasError(true)})
            console.log(hasError);
        }
    }

    const isValid = (username, password) => {
        if (password.length < 6) {
        //    error-message
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const username = e.target[0].value;
        const password = e.target[1].value;

        isValid({username, password});

        loginRequest({username, password});
    };

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
                    <button type="button" onClick={onSubmit}>Log me in!</button>
                </form>
            </div>
        </>
    )
}

export default Login;
