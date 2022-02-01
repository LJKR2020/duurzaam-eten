import React from 'react';
import "./basic-form.css";

function SignIn() {
    return (
        <>
            <div className="basic-form">
                <h1>Inloggen</h1>
                <form action="/">
                    <label htmlFor="username">
                        <input type="text" id="username" placeholder="Gebruikersnaam"/>
                    </label>
                    <label htmlFor="password">
                        <input type="text" id="password" placeholder="Wachtwoord"/>
                    </label>
                    <button type="submit">Inloggen</button>
                </form>
            </div>
        </>
    )
}

export default SignIn;
