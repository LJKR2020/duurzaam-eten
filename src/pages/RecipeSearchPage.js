import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './basic-form.css';
import './recipeCard.css';

function RecipeSearch() {
    const apikey = '';
    const url = `https://api.spoonacular.com/recipes/complexSearch${apikey}`;
    const [ingredient, setIngredient] = useState('');
    const [recipeName, setRecipeName] = useState('');
    const [endpoint, setEndpoint] = useState(``);
    const [errorIngredient, setErrorIngredient] = useState(false);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        async function fetchData() {
            if (endpoint.length > 0) {
                setErrorIngredient(false);

                try {
                    const result = await axios.get(endpoint);
                    setRecipes(result.data);
                } catch (error) {
                    setErrorIngredient(true);
                    console.error(error);
                }
            }
        }

        fetchData();
    }, [endpoint])

    function onFormSubmit(e) {
        e.preventDefault();
        let add = `&addRecipeInformation=true&number=50`
        if (Object.keys(ingredient).length > 0) {
            add += `&includesIngredients=${ingredient.replace(' ', '')}`;
        }
        if (Object.keys(recipeName).length > 0)
            add += `&query=${recipeName}`;

        setEndpoint(url + add);
    }

    return (
        <>
            <div className='basic-form'>
                <h1>Recipe Generator</h1>
                <form className='searchbars' onSubmit={onFormSubmit}>
                    <label htmlFor='ingredient'>Ingredients:</label>
                    <input
                        type='text'
                        name='ingredients'
                        id='ingredient'
                        placeholder='eggplant, apple, tomato,'
                        onChange={(e) => setIngredient(e.target.value)}
                    />
                    <label htmlFor='recipe-name'>Name of a recipe:</label>
                    <input
                        type='text'
                        name='recipe-names'
                        id='recipe-name'
                        placeholder='stew'
                        onChange={(e) => setRecipeName(e.target.value)}
                    />
                    <div>
                        {/*<button className="buttons" type="button">Random recipe</button>*/}
                        <button className='buttons' type='submit'>Search</button>
                    </div>
                    {errorIngredient && <span>
                       We didn't find any results with your entry.
                    </span>}
                </form>
            </div>
            <div className='results'>
                {Object.keys(recipes).length > 0 && recipes.results.map((recipes) => {
                        return (
                            <article key={recipes.id} className='recipe-tile'>
                                <img className='image' src={recipes.image} alt='recipe'/>
                                <h3>{recipes.title}</h3>
                                <p>source: {recipes.sourceName}</p>
                            </article>
                        )
                    }
                )
                }
            </div>
        </>
    )
}

export default RecipeSearch;
