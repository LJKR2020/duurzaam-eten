import React from 'react';
import "./basic-form.css";

function SignUp() {
    return (
        <>
            <div className="basic-form">
                <h1>Registreren</h1>
                <form action="/">
                    <label htmlFor="username">
                        <input type="text" id="username" placeholder="Gebruikersnaam"/>
                    </label>
                    <label htmlFor="password">
                        <input type="text" id="password" placeholder="Wachtwoord"/>
                    </label>
                    <label htmlFor="password-check">
                        <input type="text" id="password-check" placeholder="Herhaal het wachtwoord"/>
                    </label>
                    <button type="submit">Registreren</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
