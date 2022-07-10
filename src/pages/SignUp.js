import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import './basic-form.css';
import InputField from "../components/InputField";

const { REACT_APP_AUTH_API_URL } = process.env;

function SignUp() {
    const didMount = useRef(false);

    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidPasswords, setInvalidPasswords] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        setUsernameError(false);
        setEmailError(false);
        setInvalidPasswords(false);

        async function signUp() {
            try {
                const response = await axios.post(`${REACT_APP_AUTH_API_URL}/auth/signup`, {
                    'username': username,
                    'email': mail,
                    'password' : password,
                })
                console.log(response)
            } catch (e) {
                if (e.response.data['message'] === 'This username is already in use') {
                    setUsernameError(true);
                }
                if (e.response.data['message'] === 'This email is already in use') {
                    setEmailError(true);
                }
            }
        }

        if (didMount.current) {
            signUp();
            // promise verwerken + redirect
        } else {
            didMount.current = true;
        }
        }, [username, mail, password])

    const onSubmit = (e) => {
        e.preventDefault();

        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const passwordCheck = e.target[3].value;

        if (password !== passwordCheck) {
            setInvalidPasswords(true);
        } else {
            return setUsername(username) & setMail(email) & setPassword(password)
        }
    };

    return (
        <>
            <div className='basic-form'>
                <h1>Sign-up</h1>
                <form onSubmit={onSubmit}>
                    <InputField
                        type='text'
                        idName='username'
                        altText='Username'
                    />
                    { usernameError && <p className='errormessage'>This username already exist.</p> }

                    <InputField
                        type='email'
                        idName='email'
                        altText='E-mail address'
                    />
                    {/* email bevat een @*/}
                    { emailError && <p className='errormessage'>This email address is already in use.</p> }

                    <InputField
                        type='password'
                        idName='password'
                        altText='Enter an password'
                    />
                    {/* password langer dan 6 tekens*/}

                    <InputField
                        type='password'
                        idName='password-check'
                        altText='Repeat password'
                    />
                    { invalidPasswords && <p className='errormessage'>Passwords aren't the same</p> }

                    <button type='submit'>Sign-up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
