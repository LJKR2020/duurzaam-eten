import React from 'react';
import "./basic-form.css";

function RecipeSearch() {
    return (
       <>
           <div className="basic-form">
               <h1>Recepten Generator</h1>
               <form action="/">
                       <label htmlFor="ingredient">
                           <input type="text" id="ingredient" placeholder="Ingrediënten"/>
                       </label>
                       <label htmlFor="recipe-name">
                           <input type="text" id="recipe-name" placeholder="Naam van een recept"/>
                       </label>
                       <label htmlFor="recipe-name">
                           <input type="text" id="" placeholder=""/>
                       </label>
                   <div>
                       <button className="buttons" type="button">willekeurig recept</button>
                       <button className="buttons" type="button">Zoeken</button>
                   </div>

               </form>
           </div>
       </>
    )
}

export default RecipeSearch;
