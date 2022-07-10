import React from 'react';
import './Tile.css'

function Tile( {title, children} ) {

    return <section className='tile'>
        <h1>{title}</h1>
        {children}
    </section>
}

export default Tile;
