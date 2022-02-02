import React from 'react';
import './homepage.css'
import Tile from './../components/Tile'
import ImageTile from './../components/ImageTile'
import pasta from './../assets/pasta.jpg'
import pokebowl from './../assets/pokebowl.jpg'
import salade from './../assets/salade.jpg'

function Contact() {
    return (
        <>
            <article>
                <Tile title="Contact">
                    <p>Deze webapplicatie is gemaakt door Loredana Kraamer-Rietveld</p>
                    <p>Heb je opmerkingen, vragen of feedback? Stuur dan een e-mail naar: feedback@outlook.com </p>
                </Tile>
                <ImageTile
                    imageUrl={salade}
                />
            </article>
            <article>
                <ImageTile
                    imageUrl={pasta}
                />
                {/*laatste tegel google maps van duurzame locatie: toekomst feature*/}
                <ImageTile
                    imageUrl={pokebowl}
                />
            </article>
        </>
    )
}

export default Contact;
