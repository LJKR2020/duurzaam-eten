import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import './basic-form.css';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
// import {useHistory} from "react-router-dom";
import {useAuth} from '../AuthContext';

const {REACT_APP_AUTH_API_URL} = process.env;

function Login() {
    // const history = useHistory();
    const {login} = useAuth();
    const didMount = useRef(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [hasError, setHasError] = useState(false);

    useEffect(() => {

        async function loginRequest() {
            try {
                const response = await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signin`, {
                    'username': username,
                    'password': password,
                })
                if (response.status === 200) {
                    localStorage.setItem('token', response.data['accessToken']);
                    login();
                }
            } catch (e) {
                // console.log(e);
            }
        }

        if (didMount.current) {
            loginRequest();
        } else {
            didMount.current = true;
        }
    }, [username, password])

    const onSubmit = (e) => {
        e.preventDefault();
        setUsername(e.target[0].value);
        setPassword(e.target[1].value);
    }

    return (
        <>
            <div className='basic-form'>
                <h1>Login Page</h1>
                <form onSubmit={onSubmit}>
                    <InputField
                        type='text'
                        idName='username'
                        altText='Username'
                    />
                    <InputField
                        type='password'
                        idName='password'
                        altText='Password'
                    />
                    <SubmitButton
                        type='submit'
                        txt='Log me in!'
                    />
                </form>
            </div>
        </>
    )
}

export default Login;
