import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import './basic-form.css';
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";

const {REACT_APP_AUTH_API_URL} = process.env;

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
            //promise
        } else {
            didMount.current = true;
        }
    }, [username, password])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        setUsername(e.target[0].value);
        setPassword(e.target[1].value);
    };

    return (
        <>
            <div className='basic-form'>
                <h1>Login Page</h1>
                <form onSubmit={onSubmit}>
                    <InputField
                        type='txt'
                        idName='username'
                        altText='Username'
                    />
                    <InputField
                        type='password'
                        idName='password'
                        altText='Password'
                        minLength='6'
                    />
                    <SubmitButton
                        type='button'
                        txt='Log me in!'
                    />
                </form>
            </div>
        </>
    )
}

export default Login;
