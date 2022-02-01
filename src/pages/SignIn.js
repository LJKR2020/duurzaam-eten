import React from 'react';

function SignIn() {
    return (
        <>
            <div>
                <form action="/">
                    <h1>Inloggen</h1>
                    <label htmlFor="username"> </label>
                    <input type="text" id="username" placeholder="Gebruikersnaam"/>
                    <label htmlFor="password"> </label>
                    <input type="text" id="password" placeholder="Wachtwoord"/>
                    <button type="submit">Inloggen</button>
                </form>
            </div>
        </>
    )
}

export default SignIn;
