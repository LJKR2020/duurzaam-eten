import React from "react";

function Tile( {title, p1, p2, p3, image, text, item1, item2, item3} ) {

    return <section className="tile">
        <h1>{title}</h1>
        <p>{p1}</p>
        <p className="center">{p2}</p>
        <p>{p3}</p>
        <img src={image} alt={text}/>
        <ul className="left">
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
        </ul>
    </section>
}

export default Tile;
