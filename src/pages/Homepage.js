import React from 'react';
import Tile from './../components/Tile'
import ImageTile from './../components/ImageTile'
import spaghetti from './../assets/spaghetti.jpg'
import fridge from './../assets/fridge.jpg'

function Homepage() {
    return (
        <>
            <article>
                <Tile title="Sustainable with food">
                    <p>You can get fresh packages from the store. The packages are adjust to portions, so you won't have unused ingredients left.</p>
                    <p className="center">OR</p>
                    <p>By looking up recipes with the ingredients you have left!</p>
                </Tile>
                <ImageTile
                    imageUrl={spaghetti}
                    imageAlt="Kaas raspen boven de kom met pasta"
                />
            </article>

            <article>
                <ImageTile
                    imageUrl={fridge}
                    imageAlt="Gevulde koelkast"
                />
                <Tile title="Search for recipes">
                    <p>on:</p>
                    <ul className="left">
                        <li>ingredients;</li>
                        <li>name;</li>
                        <li>random recipe.</li>
                    </ul>
                </Tile>
            </article>

        </>
    )
}

export default Homepage;
