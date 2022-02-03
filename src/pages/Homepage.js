import React from 'react';
import './homepage.css';
import Tile from './../components/Tile'
import ImageTile from './../components/ImageTile'
import spaghetti from './../assets/spaghetti.jpg'
import fridge from './../assets/fridge.jpg'

function Homepage() {
    return (
        <>
            <article>
                <Tile title="Duurzaam eten">
                    <p>Je kunt verspakketten halen uit de winkel. De porties aanpassen, waardoor je alles op maakt.</p>
                    <p className="center">OF</p>
                    <p>Door recepten op te zoeken met de ingrediënten die je over hebt!"</p>
                </Tile>
                <ImageTile
                    imageUrl={spaghetti}
                />
            </article>

            <article>
                <ImageTile
                    imageUrl={fridge}
                />
                <Tile title="Recepten zoeken">
                    <p>op:</p>
                    <ul className="left">
                        <li>ingrediënten (die je nog hebt liggen);</li>
                        <li>naam;</li>
                        <li>willekeurig recept.</li>
                    </ul>
                </Tile>
            </article>

        </>
    )
}

export default Homepage;
