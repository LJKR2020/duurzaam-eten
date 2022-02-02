import React from 'react';
import ImageTile from './../components/Tile'
import cooking from './../assets/cooking.jpg'
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
                <ImageTile
                ImageUrl={cooking}
                />
                <div className="basic-form">
                    <h1>Account verwijderen</h1>
                    <button type="button">Uitschrijven</button>
                    <button type="button">Ja, schrijf mij uit</button>
                    <button>Nee, liever niet</button>
                </div>
            </aside>

        </>
    )
}

export default Profile;
