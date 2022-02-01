import React from 'react';
import Tile from './../components/Tile'
import karolina from './../assets/pexels-karolina-grabowska-6659559.jpg'
import "./basic-form.css"

function Profile() {
    return (
        <>
            <h1>Welkom ...</h1>
            <section className="basic-form">
                <h1>Wachtwoord wijzigen</h1>
                <form action="/">
                    <label htmlFor="current-password">
                        <input type="text" id="current-password" placeholder="Huidige wachtwoord"/>
                    </label>
                    <label htmlFor="new-password">
                        <input type="text" id="new-password" placeholder="Nieuw wachtwoord"/>
                    </label>
                    <label htmlFor="new-password-check">
                        <input type="text" id="new-password-check" placeholder="Herhaal het nieuwe wachtwoord"/>
                    </label>
                    <button type="button">Zoeken</button>
                </form>
            </section>
            <aside>
                <div className="basic-form">
                    <h1>Account verwijderen</h1>
                    <button type="button">Uitschrijven</button>
                    <button type="button">Ja, schrijf mij uit</button>
                    <button>Nee, liever niet</button>
                </div>
                <Tile
                    image={karolina}
                />
            </aside>

        </>
    )
}

export default Profile;
