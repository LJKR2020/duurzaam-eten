import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import './basic-form.css';

const { REACT_APP_AUTH_API_URL } = process.env;

function SignUp() {
    const didMount = useRef(false);
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidPasswords, setInvalidPasswords] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    useEffect(() => {
        setUsernameError(false);
        setEmailError(false);

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
            // promise toevoegen
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
                    <label htmlFor='username'>
                        <input type='text' id='username' placeholder='Username' />
                        { usernameError && <p className='errormessage'>This username is already in use.</p> }
                    </label>
                    <label htmlFor='email'>
                        <input type='email' id='email' placeholder='E-mail address' />
                        { emailError && <p className='errormessage'>This email address is already in use.</p> }
                    </label>
                    <label htmlFor='password'>
                        <input type='password' id='password' placeholder='Password'/>
                    </label>
                    <label htmlFor='password-check'>
                        <input type='password' id='password-check' placeholder='Repeat password'/>
                    </label>
                    { invalidPasswords && <p className='error'>Passwords aren't the same</p> }
                    <button type='submit'>Sign-up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
