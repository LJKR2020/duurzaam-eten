import React from 'react';
import Tile from './../components/Tile'
import ImageTile from './../components/ImageTile'
import pasta from './../assets/pasta.jpg'
import pokebowl from './../assets/pokebowl.jpg'
import salade from './../assets/salade.jpg'

function Contact() {
    return (
        <>
            <article>
                <Tile title='Contact'>
                    <p>This application is made by Loredana Rietveld</p>
                    <p>Enjoy using this application</p>
                </Tile>
                <ImageTile
                    imageUrl={salade}
                />
            </article>
            <article>
                <ImageTile
                    imageUrl={pokebowl}
                />
                <ImageTile
                    imageUrl={pasta}
                />
            </article>
        </>
    )
}

export default Contact;
