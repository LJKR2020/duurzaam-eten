import React from 'react';
import './Tile.css';

function ImageTile( {imageUrl, imageAlt} ) {
    return <section
        className='tile'
        id='image'>
            <img src={imageUrl} alt={imageAlt} className='homepageImage'/>
    </section>
}

export default ImageTile;
