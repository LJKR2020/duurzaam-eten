import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./basic-form.css";

// 9fedbc8ee0d84440a2468f6d4961fe6e

function RecipeSearch() {
    const [ingredient, setIngredient] = useState("");
    const [search, setSearch] = useState("");
    const [errorIngredient, setErrorIngredient] = useState(false);
    const [recipes, setRecipes] = useState([]);
    console.log(recipes);

    const apikey = "?apiKey=9fedbc8ee0d84440a2468f6d4961fe6e"

    useEffect(() => {
        async function fetchData() {
            setErrorIngredient(false);

            try {
                // const result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch${apikey}`);
                // setRecipes(result.data.results);
            } catch (error) {
                setErrorIngredient(true);
                console.error(error);
            }
        }

        fetchData();
    }, [search])

    function onFormSubmit(e) {
        e.preventDefault();
        setSearch(ingredient);
    }

    return (
        <>
            <div className="basic-form">
                <h1>Recepten Generator</h1>
                <form className="searchbars" onSubmit={onFormSubmit}>
                    <label htmlFor="ingredient">
                        <input
                            type="text"
                            name="ingredients"
                            id="ingredient"
                            placeholder="Ingrediënten"
                            onChange={(e) => setIngredient(e.target.value)}
                        />
                    </label>

                    {/*<label htmlFor="recipe-name">*/}
                    {/*    <input type="text" id="recipe-name" placeholder="Naam van een recept"/>*/}
                    {/*</label>*/}
                    {/*<label htmlFor="recipe-name">*/}
                    {/*    <input type="text" id="" placeholder=""/>*/}
                    {/*</label>*/}
                    <div>
                        {/*<button className="buttons" type="button">willekeurig recept</button>*/}
                        <button className="buttons" type="submit">Zoeken</button>
                    </div>
                    {errorIngredient && <span>
                       Het is niet gelukt om bijbehorende recepten te vinden.
                    </span>}
                </form>
            </div>
            <div>
                {Object.keys(recipes).length > 0 && <article>
                    <img src={recipes[0].image}/>
                    <h1>{recipes[0].title}</h1>
                </article>
                }
                {/*    array met id, image, imagetype en title*/}

                {/*    Wanneer je naar de receptenpagina wilt, moet er een nieuwe datarequest komen*/}
                {/*    - met het ophalen van de sourceUrl van het recept om eventueel door te linken*/}
                {/*    - met het ophalen van de benodigdheden. */}
                {/*    - er is een instructions string en een analyzedInstruction object.*/}
            </div>
        </>
    )
}

export default RecipeSearch;
