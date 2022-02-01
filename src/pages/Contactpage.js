import React from 'react';
import Tile from './../components/Tile'
import "./homepage.css"

function Contact() {
    return (
        <>
            <article>
                <Tile
                    title="Contact"
                    p1="Deze webapplicatie is gemaakt door Loredana Kraamer-Rietveld"
                    p3="Heb je vragen of feedback? Stuur dan een e-mail naar: feedback@outlook.com"
                />
                <Tile
                    image="{}"
                    text="nog even niks"
                />
            </article>
            <article>
                <Tile
                    image="{}"
                    text="nog even niks"
                />
                {/*laatste tegel google maps van duurzame locatie: toekomst feature*/}
                <Tile
                    image="{}"
                    text="nog even niks"
                />
            </article>
            
        </>
    )
}

export default Contact;
