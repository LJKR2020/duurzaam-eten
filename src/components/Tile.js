import React from "react";

function Tile( {title, children} ) {

    return <section className="tile">
        <h1>{title}</h1>
        {children}
    </section>
}

export default Tile;
