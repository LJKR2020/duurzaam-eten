import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import './basic-form.css';

const { REACT_APP_AUTH_API_URL } = process.env;

function Login() {
    const didMount = useRef(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    // const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function loginRequest() {
            try {
                const response = await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signin`, {
                    'username': username,
                    'password': password,
                })
                console.log(username);
                console.log(password);
                console.log(response);
            } catch (e) {
                console.log(e);
            }
        }

        if (didMount.current) {
            loginRequest();
            //promise verwerken
        } else {
            didMount.current = true;
        }
        }, [username, password])

    const onSubmit = (e) => {
        e.preventDefault();

        setUsername('yvonne');
        setPassword('yvonne1');

        // isValid({username, password});
    };

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
