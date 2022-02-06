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
                    <p>This application is made by Loredana Kraamer-Rietveld</p>
                    <p>Do you have questions or feedback? Send an e-mail to l.j_rietveld@live.nl</p>
                </Tile>
                <ImageTile
                    imageUrl={salade}
                />
            </article>
            <article>
                <ImageTile
                    imageUrl={pokebowl}
                />
                {/*laatste tegel google maps van duurzame locatie: toekomst feature*/}
                <ImageTile
                    imageUrl={pasta}
                />
            </article>
        </>
    )
}

export default Contact;
