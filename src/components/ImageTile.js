import React from "react";

function ImageTile( {imageUrl} ) {
    return <section
        className="tile"
        style={{backgroundImage: `url(${imageUrl})`}}
    />
}

export default ImageTile;
