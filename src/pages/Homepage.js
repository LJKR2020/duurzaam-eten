import React from 'react';
import './homepage.css';
import Tile from './../components/Tile'
import karolina from './../assets/pexels-karolina-grabowska-6659559.jpg'
import fridge from './../assets/pexels-polina-tankilevitch-4443433.jpg'

function Homepage() {
    return (
        <main>
            <article>
                <Tile
                    title="Duurzaam eten"
                    p1="Je kunt verspakketten halen uit de winkel. De porties aanpassen, waardoor je alles op maakt."
                    p2="OF"
                    p3="Door recepten op te zoeken met de ingredienten die je over hebt!"
                />
                <Tile
                    image={karolina}
                    text="kaas raspen boven een kom spaghetti"
                />
                
            </article>
            <article>
                <Tile
                    image={fridge}
                    text="koelkast met ingrediënten"
                />
                <Tile
                    title="Recepten zoeken"
                    p1="op:"
                    item1="ingrediënten (die je nog hebt liggen);"
                    item2="naam;"
                    item3="willekeurig recept"
                />
            </article>
        </main>
    )
}

export default Homepage;
