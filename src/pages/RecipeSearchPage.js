import React, {useState, useEffect} from 'react';
// import axios from 'axios';
import "./basic-form.css";

function RecipeSearch() {
    const apikey = "?apiKey=9fedbc8ee0d84440a2468f6d4961fe6e"
    const url = `https://api.spoonacular.com/recipes/complexSearch${apikey}`
    const [ingredient, setIngredient] = useState("");
    const [recipeName, setRecipeName] = useState("")
    const [endpoint, setEndpoint] = useState(``);
    const [errorIngredient, setErrorIngredient] = useState(false);
    const [recipes, setRecipes] = useState([]);
    console.log(recipes);

    const tijdelijk = {
        "results": [{
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 3,
            "spoonacularScore": 85.0,
            "healthScore": 62.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 149.5,
            "id": 664786,
            "title": "Venison Stew",
            "readyInMinutes": 45,
            "servings": 7,
            "sourceUrl": "https://www.foodista.com/recipe/JJ7SSGCX/venison-stew",
            "image": "https://spoonacular.com/recipeImages/664786-312x231.jpg",
            "imageType": "jpg",
            "summary": "Venison Stew might be just the main course you are searching for. This recipe serves 7. Watching your figure? This dairy free recipe has <b>267 calories</b>, <b>32g of protein</b>, and <b>7g of fat</b> per serving. For <b>$1.5 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. A mixture of venison stew meat, beef bouillon, celery, and a handful of other ingredients are all it takes to make this recipe so flavorful. 2 people have tried and liked this recipe. From preparation to the plate, this recipe takes approximately <b>approximately 45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 85%</b>, this dish is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/venison-bourguignon-venison-stew-147886\">Venison Bourguignon (Venison Stew)</a>, <a href=\"https://spoonacular.com/recipes/venison-stew-404173\">Venison Stew</a>, and <a href=\"https://spoonacular.com/recipes/venison-stew-162094\">Venison Stew</a>.",
            "cuisines": [],
            "dishTypes": ["lunch", "soup", "main course", "main dish", "dinner"],
            "diets": ["dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Cut all ingredients into 1 inch pieces. Dredge venison with flour and spices. Brown venison in hot vegetable oil. Boil and simmer venison 2 hours with beef bouillon and water.",
                    "ingredients": [{
                        "id": 1016008,
                        "name": "beef bouillon",
                        "localizedName": "beef bouillon",
                        "image": "stock-cube.jpg"
                    }, {
                        "id": 4669,
                        "name": "vegetable oil",
                        "localizedName": "vegetable oil",
                        "image": "vegetable-oil.jpg"
                    }, {
                        "id": 17164,
                        "name": "venison",
                        "localizedName": "venison",
                        "image": "deer-medaillons.jpg"
                    }, {"id": 2035, "name": "spices", "localizedName": "spices", "image": "spices.png"}, {
                        "id": 20081,
                        "name": "all purpose flour",
                        "localizedName": "all purpose flour",
                        "image": "flour.png"
                    }, {"id": 14412, "name": "water", "localizedName": "water", "image": "water.png"}],
                    "equipment": [],
                    "length": {"number": 120, "unit": "minutes"}
                }, {
                    "number": 2,
                    "step": "Add remaining ingredients and simmer for 1/2 hour.",
                    "ingredients": [],
                    "equipment": [],
                    "length": {"number": 120, "unit": "minutes"}
                }, {
                    "number": 3,
                    "step": "Mix 3 tablespoons flour and 1 cup cold water and add to stew to thicken.",
                    "ingredients": [{
                        "id": 20081,
                        "name": "all purpose flour",
                        "localizedName": "all purpose flour",
                        "image": "flour.png"
                    }, {"id": 14412, "name": "water", "localizedName": "water", "image": "water.png"}, {
                        "id": 0,
                        "name": "stew",
                        "localizedName": "stew",
                        "image": ""
                    }],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/venison-stew-664786"
        }, {
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 0,
            "spoonacularScore": 86.0,
            "healthScore": 78.0,
            "creditsText": "coffeebean",
            "license": "spoonacular's terms",
            "sourceName": "spoonacular",
            "pricePerServing": 251.63,
            "id": 149627,
            "title": "Cabbage Stew",
            "author": "coffeebean",
            "readyInMinutes": 45,
            "servings": 2,
            "sourceUrl": "http://spoonacular.com/-1378756906571",
            "image": "https://spoonacular.com/recipeImages/149627-312x231.jpg",
            "imageType": "jpg",
            "summary": "Cabbage Stew might be just the soup you are searching for. This recipe serves 2 and costs $2.52 per serving. One serving contains <b>354 calories</b>, <b>9g of protein</b>, and <b>15g of fat</b>. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It will be a hit at your <b>Autumn</b> event. It is a good option if you're following a <b>caveman, gluten free, primal, and whole 30</b> diet. A mixture of salt and pepper, olive oil, onion, and a handful of other ingredients are all it takes to make this recipe so delicious. Try <a href=\"https://spoonacular.com/recipes/ww-cabbage-stew-94074\">Ww Cabbage Stew</a>, <a href=\"https://spoonacular.com/recipes/cod-and-cabbage-stew-86260\">Cod and Cabbage Stew</a>, and <a href=\"https://spoonacular.com/recipes/cabbage-stew-582188\">Cabbage Stew</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": ["side dish"],
            "diets": ["gluten free", "dairy free", "paleolithic", "lacto ovo vegetarian", "primal", "vegan"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Slice the leeks, mince the onion, dice the carrots, and chop the cabbage.",
                    "ingredients": [{
                        "id": 11109,
                        "name": "cabbage",
                        "localizedName": "cabbage",
                        "image": "cabbage.jpg"
                    }, {
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }, {"id": 11246, "name": "leek", "localizedName": "leek", "image": "leeks.jpg"}, {
                        "id": 0,
                        "name": "ground meat",
                        "localizedName": "ground meat",
                        "image": "fresh-ground-beef.jpg"
                    }, {"id": 11282, "name": "onion", "localizedName": "onion", "image": "brown-onion.png"}],
                    "equipment": []
                }, {
                    "number": 2,
                    "step": "Saute the onion and carrots in a large pot until the onions are translucent and the carrots start to get soft.    Meanwhile, in another pan, lightly fry the cabbage.",
                    "ingredients": [{
                        "id": 11109,
                        "name": "cabbage",
                        "localizedName": "cabbage",
                        "image": "cabbage.jpg"
                    }, {
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }, {"id": 11282, "name": "onion", "localizedName": "onion", "image": "brown-onion.png"}],
                    "equipment": [{
                        "id": 404645,
                        "name": "frying pan",
                        "localizedName": "frying pan",
                        "image": "pan.png"
                    }, {"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 3,
                    "step": "Add the leeks to the pot with onion and carrots and cook for another couple minutes.",
                    "ingredients": [{
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }, {"id": 11246, "name": "leek", "localizedName": "leek", "image": "leeks.jpg"}, {
                        "id": 11282,
                        "name": "onion",
                        "localizedName": "onion",
                        "image": "brown-onion.png"
                    }],
                    "equipment": [{"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 4,
                    "step": "Add the tomatoes and vegetable broth to the pot along with the garlic and bay leaves. Bring to a boil and reduce to a simmer.    When the cabbage starts to brown, add it to the pot.",
                    "ingredients": [{
                        "id": 6615,
                        "name": "vegetable broth",
                        "localizedName": "vegetable broth",
                        "image": "chicken-broth.png"
                    }, {
                        "id": 2004,
                        "name": "bay leaves",
                        "localizedName": "bay leaves",
                        "image": "bay-leaves.jpg"
                    }, {"id": 11529, "name": "tomato", "localizedName": "tomato", "image": "tomato.png"}, {
                        "id": 11109,
                        "name": "cabbage",
                        "localizedName": "cabbage",
                        "image": "cabbage.jpg"
                    }, {"id": 11215, "name": "garlic", "localizedName": "garlic", "image": "garlic.png"}],
                    "equipment": [{"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 5,
                    "step": "Let simmer for another 10-15 minutes until all the vegetables are tender. Be careful not to let them get too soft.    Season with fresh or dried herbs, add salt and pepper to taste.",
                    "ingredients": [{
                        "id": 1102047,
                        "name": "salt and pepper",
                        "localizedName": "salt and pepper",
                        "image": "salt-and-pepper.jpg"
                    }, {
                        "id": 1022042,
                        "name": "dried herbs",
                        "localizedName": "dried herbs",
                        "image": "dried-herbs.png"
                    }, {
                        "id": 11583,
                        "name": "vegetable",
                        "localizedName": "vegetable",
                        "image": "mixed-vegetables.png"
                    }],
                    "equipment": [],
                    "length": {"number": 15, "unit": "minutes"}
                }, {
                    "number": 6,
                    "step": "Serve with ciabatta.",
                    "ingredients": [{
                        "id": 93655,
                        "name": "ciabatta",
                        "localizedName": "ciabatta",
                        "image": "ciabatta-loaf.jpg"
                    }],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/cabbage-stew-149627"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 10,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 9,
            "spoonacularScore": 56.0,
            "healthScore": 11.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 142.82,
            "id": 638343,
            "title": "Chicken Stew For The Soul",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/LSHK4547/chicken-stew-for-the-soul",
            "image": "https://spoonacular.com/recipeImages/638343-312x231.jpg",
            "imageType": "jpg",
            "summary": "Chicken Stew For The Soul might be just the main course you are searching for. Watching your figure? This gluten free, dairy free, and whole 30 recipe has <b>497 calories</b>, <b>34g of protein</b>, and <b>33g of fat</b> per serving. For <b>$1.81 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. It will be a hit at your <b>Autumn</b> event. If you have cardamoms, salt, ground tumeric, and a few other ingredients on hand, you can make it. To use up the onion you could follow this main course with the <a href=\"https://spoonacular.com/recipes/candy-corn-cupcakes-63881\">Candy Corn Cupcakes</a> as a dessert. Only a few people made this recipe, and 9 would say it hit the spot. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 57%</b>. This score is good. Try <a href=\"https://spoonacular.com/recipes/chicken-for-babies-soul-543682\">Chicken For Babies Soul</a>, <a href=\"https://spoonacular.com/recipes/chicken-soup-for-the-soul-101305\">Chicken Soup for the Soul</a>, and <a href=\"https://spoonacular.com/recipes/chicken-riggies-and-scarole-with-soul-334500\">Chicken Riggies and 'Scarole with Soul</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": ["lunch", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Slice the onions, slit the chillies, cube the potatoes and keep aside.",
                    "ingredients": [{
                        "id": 11819,
                        "name": "chili pepper",
                        "localizedName": "chili pepper",
                        "image": "red-chili.jpg"
                    }, {
                        "id": 11352,
                        "name": "potato",
                        "localizedName": "potato",
                        "image": "potatoes-yukon-gold.png"
                    }, {"id": 11282, "name": "onion", "localizedName": "onion", "image": "brown-onion.png"}],
                    "equipment": []
                }, {
                    "number": 2,
                    "step": "Heat oil in a heavy bottomed pan or pressure cooker, splutter mustard seeds.",
                    "ingredients": [{
                        "id": 2024,
                        "name": "mustard seeds",
                        "localizedName": "mustard seeds",
                        "image": "mustard-seeds.png"
                    }, {
                        "id": 4582,
                        "name": "cooking oil",
                        "localizedName": "cooking oil",
                        "image": "vegetable-oil.jpg"
                    }],
                    "equipment": [{
                        "id": 404658,
                        "name": "pressure cooker",
                        "localizedName": "pressure cooker",
                        "image": "pressure-cooker.jpg"
                    }, {"id": 404645, "name": "frying pan", "localizedName": "frying pan", "image": "pan.png"}]
                }, {
                    "number": 3,
                    "step": "Add the whole spices and stir till you begin to get the aroma of the spices.",
                    "ingredients": [{"id": 2035, "name": "spices", "localizedName": "spices", "image": "spices.png"}],
                    "equipment": []
                }, {
                    "number": 4,
                    "step": "Add sliced onions,curry leaves and green chillies and saute.Stir in the ground coriander and add the marinaded chicken. Stir so that the chicken is covered well in the sauteed mixture.Cover and let it cook. When it is half done add the cubed potatoes.When the chicken is almost done add the garam masala,salt and coconut milk and stir.When done put off the heat and garnish with chopped fresh coriander.Have I forgotten the most important ingredient? Stir it with lots of love for the family and friends who will partake of the meal.",
                    "ingredients": [{
                        "id": 1002013,
                        "name": "ground coriander",
                        "localizedName": "ground coriander",
                        "image": "ground-coriander.jpg"
                    }, {
                        "id": 11165,
                        "name": "fresh cilantro",
                        "localizedName": "fresh cilantro",
                        "image": "cilantro.png"
                    }, {
                        "id": 31015,
                        "name": "green chili pepper",
                        "localizedName": "green chili pepper",
                        "image": "chili-peppers-green.jpg"
                    }, {
                        "id": 12118,
                        "name": "coconut milk",
                        "localizedName": "coconut milk",
                        "image": "coconut-milk.png"
                    }, {
                        "id": 93604,
                        "name": "curry leaves",
                        "localizedName": "curry leaves",
                        "image": "curry-leaves.jpg"
                    }, {
                        "id": 93663,
                        "name": "garam masala",
                        "localizedName": "garam masala",
                        "image": "garam-masala.jpg"
                    }, {
                        "id": 11352,
                        "name": "potato",
                        "localizedName": "potato",
                        "image": "potatoes-yukon-gold.png"
                    }, {
                        "id": 5006,
                        "name": "whole chicken",
                        "localizedName": "whole chicken",
                        "image": "whole-chicken.jpg"
                    }, {
                        "id": 11282,
                        "name": "onion",
                        "localizedName": "onion",
                        "image": "brown-onion.png"
                    }, {"id": 2047, "name": "salt", "localizedName": "salt", "image": "salt.jpg"}],
                    "equipment": []
                }, {
                    "number": 5,
                    "step": "Serve hot chicken stew with freshly made appams.",
                    "ingredients": [{
                        "id": 5006,
                        "name": "whole chicken",
                        "localizedName": "whole chicken",
                        "image": "whole-chicken.jpg"
                    }, {"id": 0, "name": "stew", "localizedName": "stew", "image": ""}],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/chicken-stew-for-the-soul-638343"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 19,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 77.0,
            "healthScore": 49.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 488.56,
            "id": 1096242,
            "title": "Chicken Stew with a Herb Crust",
            "readyInMinutes": 85,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/WNKY8HY6/chicken-stew-with-a-herb-crust",
            "image": "https://spoonacular.com/recipeImages/1096242-312x231.jpg",
            "imageType": "jpg",
            "summary": "Chicken Stew with a Herb Crust requires about <b>1 hour and 25 minutes</b> from start to finish. For <b>$4.89 per serving</b>, this recipe <b>covers 48%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains approximately <b>58g of protein</b>, <b>34g of fat</b>, and a total of <b>831 calories</b>. This recipe serves 4. It is perfect for <b>Winter</b>. 1 person were impressed by this recipe. A mixture of white wine, breadcrumbs, parsley, and a handful of other ingredients are all it takes to make this recipe so tasty. It works well as a main course. It is brought to you by Foodista. With a spoonacular <b>score of 87%</b>, this dish is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-pot-pie-with-herb-crust-163281\">Chicken Pot Pie with Herb Crust</a>, <a href=\"https://spoonacular.com/recipes/chicken-with-parmesan-garlic-and-herb-crust-38694\">Chicken with Parmesan, Garlic, and Herb Crust</a>, and <a href=\"https://spoonacular.com/recipes/chicken-pot-pie-with-herb-and-cheddar-crust-173474\">Chicken Pot Pie with Herb and Cheddar Crust</a>.",
            "cuisines": [],
            "dishTypes": ["lunch", "soup", "main course", "main dish", "dinner"],
            "diets": [],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Preheat oven to 180C.",
                    "ingredients": [],
                    "equipment": [{
                        "id": 404784,
                        "name": "oven",
                        "localizedName": "oven",
                        "image": "oven.jpg",
                        "temperature": {"number": 180.0, "unit": "Celsius"}
                    }]
                }, {
                    "number": 2,
                    "step": "Cut the chicken thighs into large chunky pieces.Fry the onions in the butter and a glug of olive oil in a casserole pot.",
                    "ingredients": [{
                        "id": 5091,
                        "name": "chicken thighs",
                        "localizedName": "chicken thighs",
                        "image": "chicken-thigh.jpg"
                    }, {
                        "id": 4053,
                        "name": "olive oil",
                        "localizedName": "olive oil",
                        "image": "olive-oil.jpg"
                    }, {
                        "id": 1001,
                        "name": "butter",
                        "localizedName": "butter",
                        "image": "butter-sliced.jpg"
                    }, {"id": 11282, "name": "onion", "localizedName": "onion", "image": "brown-onion.png"}],
                    "equipment": [{"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 3,
                    "step": "Add the pancetta and cook until crisp, then follow with the parsnip and potato chunks.When the mixture is soft and brown, add the chicken pieces, leeks and herbs, cook for 5 minutes.",
                    "ingredients": [{
                        "id": 1005006,
                        "name": "chicken pieces",
                        "localizedName": "chicken pieces",
                        "image": "chicken-parts.jpg"
                    }, {
                        "id": 10410123,
                        "name": "pancetta",
                        "localizedName": "pancetta",
                        "image": "pancetta.png"
                    }, {
                        "id": 11298,
                        "name": "parsnip",
                        "localizedName": "parsnip",
                        "image": "parsnip.jpg"
                    }, {
                        "id": 11352,
                        "name": "potato",
                        "localizedName": "potato",
                        "image": "potatoes-yukon-gold.png"
                    }, {
                        "id": 1002044,
                        "name": "herbs",
                        "localizedName": "herbs",
                        "image": "mixed-fresh-herbs.jpg"
                    }, {"id": 11246, "name": "leek", "localizedName": "leek", "image": "leeks.jpg"}],
                    "equipment": [],
                    "length": {"number": 5, "unit": "minutes"}
                }, {
                    "number": 4,
                    "step": "Add the wine, stock, prunes, salt and pepper, stir until mixed well.Bring mixture to the boil, then immediately remove, and place in the oven with a lid.Cook for approximately 40-50 minutes, checking regularly to stir.For the herb crust, you want to make enough mixture to cover the stew in your chosen pot size.",
                    "ingredients": [{
                        "id": 1102047,
                        "name": "salt and pepper",
                        "localizedName": "salt and pepper",
                        "image": "salt-and-pepper.jpg"
                    }, {"id": 9291, "name": "prunes", "localizedName": "prunes", "image": "prunes.jpg"}, {
                        "id": 0,
                        "name": "crust",
                        "localizedName": "crust",
                        "image": ""
                    }, {
                        "id": 1006615,
                        "name": "stock",
                        "localizedName": "stock",
                        "image": "chicken-broth.png"
                    }, {"id": 0, "name": "stew", "localizedName": "stew", "image": ""}, {
                        "id": 14084,
                        "name": "wine",
                        "localizedName": "wine",
                        "image": "red-wine.jpg"
                    }],
                    "equipment": [{
                        "id": 404784,
                        "name": "oven",
                        "localizedName": "oven",
                        "image": "oven.jpg"
                    }, {"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}],
                    "length": {"number": 50, "unit": "minutes"}
                }, {
                    "number": 5,
                    "step": "Mix approximately 1 cup breadcrumbs with enough grated parmesan to meld mixture together.",
                    "ingredients": [{
                        "id": 18079,
                        "name": "breadcrumbs",
                        "localizedName": "breadcrumbs",
                        "image": "breadcrumbs.jpg"
                    }, {"id": 1033, "name": "parmesan", "localizedName": "parmesan", "image": "parmesan.jpg"}],
                    "equipment": []
                }, {
                    "number": 6,
                    "step": "Add the chopped parsley and tarragon, and salt and pepper. The mixture should be balanced and with enough cheese to melt and make a crust.When sauce is thickened and all ingredients cooked, remove stew from the oven and sprinkle over the crust mixture.Increase oven heat to 200C and return stew to the oven, uncovered, for 10 minutes or until the crust starts to brown.",
                    "ingredients": [{
                        "id": 1102047,
                        "name": "salt and pepper",
                        "localizedName": "salt and pepper",
                        "image": "salt-and-pepper.jpg"
                    }, {
                        "id": 2041,
                        "name": "tarragon",
                        "localizedName": "tarragon",
                        "image": "tarragon.jpg"
                    }, {
                        "id": 11297,
                        "name": "parsley",
                        "localizedName": "parsley",
                        "image": "parsley.jpg"
                    }, {
                        "id": 1041009,
                        "name": "cheese",
                        "localizedName": "cheese",
                        "image": "cheddar-cheese.png"
                    }, {"id": 0, "name": "crust", "localizedName": "crust", "image": ""}, {
                        "id": 0,
                        "name": "sauce",
                        "localizedName": "sauce",
                        "image": ""
                    }, {"id": 0, "name": "stew", "localizedName": "stew", "image": ""}],
                    "equipment": [{
                        "id": 404784,
                        "name": "oven",
                        "localizedName": "oven",
                        "image": "oven.jpg",
                        "temperature": {"number": 200.0, "unit": "Celsius"}
                    }],
                    "length": {"number": 10, "unit": "minutes"}
                }, {"number": 7, "step": "Serve!", "ingredients": [], "equipment": []}]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/chicken-stew-with-a-herb-crust-1096242"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 2,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 64.0,
            "healthScore": 21.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 33.14,
            "id": 654283,
            "title": "Ox Tripe Stew (Callos)",
            "readyInMinutes": 45,
            "servings": 8,
            "sourceUrl": "https://www.foodista.com/recipe/N58MY2Z4/ox-tripe-stew-callos",
            "image": "https://spoonacular.com/recipeImages/654283-312x231.jpg",
            "imageType": "jpg",
            "summary": "Ox Tripe Stew (Callos) takes roughly <b>about 45 minutes</b> from beginning to end. One portion of this dish contains about <b>4g of protein</b>, <b>4g of fat</b>, and a total of <b>96 calories</b>. This recipe serves 8 and costs 33 cents per serving. 1 person were glad they tried this recipe. It will be a hit at your <b>Autumn</b> event. It works well as a very reasonably priced soup. It is brought to you by Foodista. A mixture of tomoto sauce, vegetable oil, bell pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 63%</b>, which is solid. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/how-to-cook-callos-beef-tripe-and-leg-stew-478171\">How to cook: Callos, beef tripe and leg stew</a>, <a href=\"https://spoonacular.com/recipes/beef-tripe-and-hominy-stew-posole-362508\">Beef Tripe and Hominy Stew: Posole</a>, and <a href=\"https://spoonacular.com/recipes/the-nasty-bits-lamb-tripe-stew-198732\">The Nasty Bits: Lamb Tripe Stew</a>.",
            "cuisines": [],
            "dishTypes": ["soup"],
            "diets": ["gluten free", "dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Make sure that the tripe is tenderized.  Otherwise put the tripe in a pot.  Throw in some bay leaf, peppercorn and boil it until tender.",
                    "ingredients": [{
                        "id": 1022030,
                        "name": "peppercorns",
                        "localizedName": "peppercorns",
                        "image": "black-pepper.png"
                    }, {"id": 2004, "name": "bay leaves", "localizedName": "bay leaves", "image": "bay-leaves.jpg"}],
                    "equipment": [{"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 2,
                    "step": "Remove scum that gathers around the top.  I also replace the water and boil it until tender.  You got the drift why I said this dish needs some TLC?  But don't worry, it's worth all the trouble.",
                    "ingredients": [{"id": 14412, "name": "water", "localizedName": "water", "image": "water.png"}],
                    "equipment": []
                }, {
                    "number": 3,
                    "step": "In a  saucepan, put a little oil and brown the sides of the chorizos or until firm.  Set aside, when it's cool, slice it into jullienne strip, or just the way you sliced your tripe to give a uniformed look.  On the same pan, add a little olive oil.",
                    "ingredients": [{
                        "id": 4053,
                        "name": "olive oil",
                        "localizedName": "olive oil",
                        "image": "olive-oil.jpg"
                    }, {
                        "id": 4582,
                        "name": "cooking oil",
                        "localizedName": "cooking oil",
                        "image": "vegetable-oil.jpg"
                    }],
                    "equipment": [{
                        "id": 404669,
                        "name": "sauce pan",
                        "localizedName": "sauce pan",
                        "image": "sauce-pan.jpg"
                    }, {"id": 404645, "name": "frying pan", "localizedName": "frying pan", "image": "pan.png"}]
                }, {
                    "number": 4,
                    "step": "Saute the garlic, onions and  tomatoes.  Before putting in the tripe, make sure that the tomatoes is all wilted, this may take a little over 4 minutes.",
                    "ingredients": [{
                        "id": 11529,
                        "name": "tomato",
                        "localizedName": "tomato",
                        "image": "tomato.png"
                    }, {"id": 11215, "name": "garlic", "localizedName": "garlic", "image": "garlic.png"}, {
                        "id": 11282,
                        "name": "onion",
                        "localizedName": "onion",
                        "image": "brown-onion.png"
                    }],
                    "equipment": [],
                    "length": {"number": 4, "unit": "minutes"}
                }, {
                    "number": 5,
                    "step": "Add the tripe.  Give it a stir.",
                    "ingredients": [],
                    "equipment": []
                }, {
                    "number": 6,
                    "step": "Add the bay leaf and black pepper. Stir a little more.",
                    "ingredients": [{
                        "id": 1002030,
                        "name": "black pepper",
                        "localizedName": "black pepper",
                        "image": "pepper.jpg"
                    }, {"id": 2004, "name": "bay leaves", "localizedName": "bay leaves", "image": "bay-leaves.jpg"}],
                    "equipment": []
                }, {
                    "number": 7,
                    "step": "Add the chorizo slices.",
                    "ingredients": [{
                        "id": 99233,
                        "name": "chorizo",
                        "localizedName": "chorizo",
                        "image": "chorizo.jpg"
                    }],
                    "equipment": []
                }, {
                    "number": 8,
                    "step": "Pour the tomato sauce, then the beef stock.",
                    "ingredients": [{
                        "id": 11549,
                        "name": "tomato sauce",
                        "localizedName": "tomato sauce",
                        "image": "tomato-sauce-or-pasta-sauce.jpg"
                    }, {"id": 6170, "name": "beef stock", "localizedName": "beef stock", "image": "beef-broth.png"}],
                    "equipment": []
                }, {"number": 9, "step": "Let it simmer.", "ingredients": [], "equipment": []}, {
                    "number": 10,
                    "step": "Add the potatoes and carrots and garbanzos and red eye beans.  Cook for about 4 minutes or untile they are tender.  Season with paprika.",
                    "ingredients": [{
                        "id": 16057,
                        "name": "chickpeas",
                        "localizedName": "chickpeas",
                        "image": "chickpeas.png"
                    }, {
                        "id": 11352,
                        "name": "potato",
                        "localizedName": "potato",
                        "image": "potatoes-yukon-gold.png"
                    }, {
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }, {"id": 2028, "name": "paprika", "localizedName": "paprika", "image": "paprika.jpg"}, {
                        "id": 0,
                        "name": "beans",
                        "localizedName": "beans",
                        "image": "kidney-beans.jpg"
                    }],
                    "equipment": [],
                    "length": {"number": 4, "unit": "minutes"}
                }, {
                    "number": 11,
                    "step": "Add the remaining veggies.",
                    "ingredients": [],
                    "equipment": []
                }, {
                    "number": 12,
                    "step": "Tip: You don't want to overcook your veggies, so what I usually do is add it whem the sauce has been reduced.  The sauce should be nice and sticky... and mmm good.",
                    "ingredients": [{"id": 0, "name": "sauce", "localizedName": "sauce", "image": ""}],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/ox-tripe-stew-callos-654283"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 6,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 11,
            "spoonacularScore": 80.0,
            "healthScore": 31.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 227.29,
            "id": 648432,
            "title": "Jambalaya Stew",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/HG72GN7R/jambalaya-stew",
            "image": "https://spoonacular.com/recipeImages/648432-312x231.jpg",
            "imageType": "jpg",
            "summary": "Jambalaya Stew might be a good recipe to expand your main course recipe box. This recipe serves 4 and costs $2.27 per serving. Watching your figure? This gluten free and dairy free recipe has <b>289 calories</b>, <b>21g of protein</b>, and <b>8g of fat</b> per serving. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. It is brought to you by Foodista. <b>Autumn</b> will be even more special with this recipe. If you have cajun seasoning, canned tomatoes, shrimp, and a few other ingredients on hand, you can make it. This recipe is liked by 11 foodies and cooks. It is an <b>affordable</b> recipe for fans of Cajun food. All things considered, we decided this recipe <b>deserves a spoonacular score of 80%</b>. This score is great. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/jambalaya-stew-34848\">Jambalaya Stew</a>, <a href=\"https://spoonacular.com/recipes/gumbo-laya-gumbo-+-jambalaya-stew-793549\">Gumbo-laya” (Gumbo + Jambalaya) Stew</a>, and <a href=\"https://spoonacular.com/recipes/jambalaya-1079154\">Jambalaya</a>.",
            "cuisines": ["Creole", "Cajun"],
            "dishTypes": ["lunch", "soup", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Add all ingredients except shrimp to a large pot on the stove.",
                    "ingredients": [{"id": 15270, "name": "shrimp", "localizedName": "shrimp", "image": "shrimp.png"}],
                    "equipment": [{
                        "id": 404794,
                        "name": "stove",
                        "localizedName": "stove",
                        "image": "oven.jpg"
                    }, {"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 2,
                    "step": "Mix thoroughly. Bring to a boil.",
                    "ingredients": [],
                    "equipment": []
                }, {
                    "number": 3,
                    "step": "Reduce heat to medium low. Cover and simmer until vegetables are tender and rice is fluffy, about 35 minutes.",
                    "ingredients": [{
                        "id": 11583,
                        "name": "vegetable",
                        "localizedName": "vegetable",
                        "image": "mixed-vegetables.png"
                    }, {"id": 20444, "name": "rice", "localizedName": "rice", "image": "uncooked-white-rice.png"}],
                    "equipment": [],
                    "length": {"number": 35, "unit": "minutes"}
                }, {
                    "number": 4,
                    "step": "Add shrimp and re-cover. Continue to cook until shrimp are tender and cooked through, about 6 minutes.",
                    "ingredients": [{"id": 15270, "name": "shrimp", "localizedName": "shrimp", "image": "shrimp.png"}],
                    "equipment": [],
                    "length": {"number": 6, "unit": "minutes"}
                }, {
                    "number": 5,
                    "step": "If you like, season to taste with salt, black pepper, and additional hot sauce.",
                    "ingredients": [{
                        "id": 1002030,
                        "name": "black pepper",
                        "localizedName": "black pepper",
                        "image": "pepper.jpg"
                    }, {
                        "id": 6168,
                        "name": "hot sauce",
                        "localizedName": "hot sauce",
                        "image": "hot-sauce-or-tabasco.png"
                    }, {"id": 2047, "name": "salt", "localizedName": "salt", "image": "salt.jpg"}],
                    "equipment": []
                }, {"number": 6, "step": "Serve and enjoy!!!", "ingredients": [], "equipment": []}]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/jambalaya-stew-648432"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 6,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 68.0,
            "healthScore": 26.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 225.19,
            "id": 658058,
            "title": "Red Curry Stew & Vegetable Noodles",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "http://www.foodista.com/recipe/NJ7CGSKG/red-curry-stew-vegetable-noodles",
            "image": "https://spoonacular.com/recipeImages/658058-312x231.jpg",
            "imageType": "jpg",
            "summary": "The recipe Red Curry Stew & Vegetable Noodles is ready <b>in about 45 minutes</b> and is definitely a spectacular <b>gluten free, dairy free, and pescatarian</b> option for lovers of Indian food. For <b>$2.21 per serving</b>, you get a side dish that serves 6. One serving contains <b>211 calories</b>, <b>8g of protein</b>, and <b>10g of fat</b>. It is perfect for <b>Autumn</b>. 1 person were impressed by this recipe. Head to the store and pick up onion, coconut milk, carrots, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/vegetable-and-tofu-coconut-red-curry-daikon-noodles-624402\">Vegetable and Tofu Coconut Red Curry Daikon Noodles</a>, <a href=\"https://spoonacular.com/recipes/thai-red-curry-with-vegetables-917840\">Thai Red Curry with Vegetables</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-red-lentil-sweet-potato-stew-928497\">One-Pot Red Lentil Sweet Potato Stew</a> for similar recipes.",
            "cuisines": ["Indian", "Asian"],
            "dishTypes": ["side dish"],
            "diets": ["gluten free", "dairy free", "pescatarian"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Make vegetable noodles with the carrots, yellow squash, and zucchini with a julienne pepper.",
                    "ingredients": [{
                        "id": 10211641,
                        "name": "yellow squash",
                        "localizedName": "yellow squash",
                        "image": "yellow-squash.jpg"
                    }, {
                        "id": 11583,
                        "name": "vegetable",
                        "localizedName": "vegetable",
                        "image": "mixed-vegetables.png"
                    }, {
                        "id": 11477,
                        "name": "zucchini",
                        "localizedName": "zucchini",
                        "image": "zucchini.jpg"
                    }, {
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }, {"id": 20420, "name": "pasta", "localizedName": "pasta", "image": "fusilli.jpg"}, {
                        "id": 1002030,
                        "name": "pepper",
                        "localizedName": "pepper",
                        "image": "pepper.jpg"
                    }],
                    "equipment": []
                }, {
                    "number": 2,
                    "step": "Place all the noodles into a medium-sized bowl, and mix them together. Set aside. Chop up the parts of the vegetable that were not cut by the julienne peeler. Save it for the stew.",
                    "ingredients": [{
                        "id": 11583,
                        "name": "vegetable",
                        "localizedName": "vegetable",
                        "image": "mixed-vegetables.png"
                    }, {"id": 20420, "name": "pasta", "localizedName": "pasta", "image": "fusilli.jpg"}, {
                        "id": 0,
                        "name": "stew",
                        "localizedName": "stew",
                        "image": ""
                    }],
                    "equipment": [{
                        "id": 404693,
                        "name": "peeler",
                        "localizedName": "peeler",
                        "image": "peeler.png"
                    }, {"id": 404783, "name": "bowl", "localizedName": "bowl", "image": "bowl.jpg"}]
                }, {
                    "number": 3,
                    "step": "Drain the water from the tofu package and rinse the tofu. Chop the tofu into smaller cubes, and set aside.",
                    "ingredients": [{
                        "id": 14412,
                        "name": "water",
                        "localizedName": "water",
                        "image": "water.png"
                    }, {"id": 16213, "name": "tofu", "localizedName": "tofu", "image": "tofu.png"}],
                    "equipment": []
                }, {
                    "number": 4,
                    "step": "Heat the olive oil in a medium-sized pot over medium-high heat. Once the pot is heated, pour in the diced onions and ginger. Saut them for about 2 minutes, or until the onions turn translucent. Next, add the minced garlic, curry paste, diced potatoes, chopped carrots, and stir everything together.",
                    "ingredients": [{
                        "id": 0,
                        "name": "minced garlic",
                        "localizedName": "minced garlic",
                        "image": "garlic.png"
                    }, {
                        "id": 93605,
                        "name": "curry paste",
                        "localizedName": "curry paste",
                        "image": "chili-paste.png"
                    }, {
                        "id": 4053,
                        "name": "olive oil",
                        "localizedName": "olive oil",
                        "image": "olive-oil.jpg"
                    }, {
                        "id": 11352,
                        "name": "potato",
                        "localizedName": "potato",
                        "image": "potatoes-yukon-gold.png"
                    }, {
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }, {"id": 11216, "name": "ginger", "localizedName": "ginger", "image": "ginger.png"}, {
                        "id": 11282,
                        "name": "onion",
                        "localizedName": "onion",
                        "image": "brown-onion.png"
                    }],
                    "equipment": [{"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}],
                    "length": {"number": 2, "unit": "minutes"}
                }, {
                    "number": 5,
                    "step": "Add the vegetable stock and cover the pot with a lid. Once the stock starts boiling, add the coconut milk, cabbage, and chopped summer squash, stir, and wait for the water to start boiling again. Once the stew boils, season with fish sauce, lime juice, and sea salt. Check to see if the potatoes are fully cooked by piercing a fork into a piece of potato. If the fork can go through it easily, they're ready.Turn off the heat, and add the chopped basil. You can also save some for garnish.In a bowl, put about 1 to 1-1/2 cups of the vegetable noodles on the bottom, and pour the stew on top.",
                    "ingredients": [{
                        "id": 6615,
                        "name": "vegetable stock",
                        "localizedName": "vegetable stock",
                        "image": "chicken-broth.png"
                    }, {
                        "id": 11641,
                        "name": "summer squash",
                        "localizedName": "summer squash",
                        "image": "yellow-squash.jpg"
                    }, {
                        "id": 12118,
                        "name": "coconut milk",
                        "localizedName": "coconut milk",
                        "image": "coconut-milk.png"
                    }, {
                        "id": 6179,
                        "name": "fish sauce",
                        "localizedName": "fish sauce",
                        "image": "asian-fish-sauce.jpg"
                    }, {
                        "id": 9160,
                        "name": "lime juice",
                        "localizedName": "lime juice",
                        "image": "lime-juice.png"
                    }, {
                        "id": 11583,
                        "name": "vegetable",
                        "localizedName": "vegetable",
                        "image": "mixed-vegetables.png"
                    }, {
                        "id": 11352,
                        "name": "potato",
                        "localizedName": "potato",
                        "image": "potatoes-yukon-gold.png"
                    }, {
                        "id": 1012047,
                        "name": "sea salt",
                        "localizedName": "sea salt",
                        "image": "salt.jpg"
                    }, {
                        "id": 11109,
                        "name": "cabbage",
                        "localizedName": "cabbage",
                        "image": "cabbage.jpg"
                    }, {"id": 20420, "name": "pasta", "localizedName": "pasta", "image": "fusilli.jpg"}, {
                        "id": 2044,
                        "name": "basil",
                        "localizedName": "basil",
                        "image": "basil.jpg"
                    }, {
                        "id": 1006615,
                        "name": "stock",
                        "localizedName": "stock",
                        "image": "chicken-broth.png"
                    }, {"id": 14412, "name": "water", "localizedName": "water", "image": "water.png"}, {
                        "id": 0,
                        "name": "stew",
                        "localizedName": "stew",
                        "image": ""
                    }],
                    "equipment": [{
                        "id": 404783,
                        "name": "bowl",
                        "localizedName": "bowl",
                        "image": "bowl.jpg"
                    }, {"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 6,
                    "step": "Sprinkle black sesame seeds for garnish.Refrigerate leftover noodles in a separate container from the stew.",
                    "ingredients": [{
                        "id": 10012023,
                        "name": "black sesame seeds",
                        "localizedName": "black sesame seeds",
                        "image": "black-sesame-seeds-or-chia-seeds.png"
                    }, {"id": 20420, "name": "pasta", "localizedName": "pasta", "image": "fusilli.jpg"}, {
                        "id": 0,
                        "name": "stew",
                        "localizedName": "stew",
                        "image": ""
                    }],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/red-curry-stew-vegetable-noodles-658058"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 27,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 2,
            "spoonacularScore": 83.0,
            "healthScore": 56.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 522.72,
            "id": 649248,
            "title": "Lamb Tagine Stew",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "http://www.foodista.com/recipe/W5XY7PWG/lamb-tagine-stew",
            "image": "https://spoonacular.com/recipeImages/649248-312x231.jpg",
            "imageType": "jpg",
            "summary": "Lamb Tagine Stew might be just the main course you are searching for. For <b>$5.25 per serving</b>, this recipe <b>covers 38%</b> of your daily requirements of vitamins and minerals. One serving contains <b>884 calories</b>, <b>46g of protein</b>, and <b>68g of fat</b>. 1 person has made this recipe and would make it again. A mixture of lamb stock, carrot, peas, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you're following a <b>caveman, gluten free, dairy free, and primal</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 84%</b>. This score is amazing. Similar recipes include <a href=\"https://spoonacular.com/recipes/lamb-tagine-98103\">Lamb Tagine</a>, <a href=\"https://spoonacular.com/recipes/lamb-tagine-97554\">Lamb Tagine</a>, and <a href=\"https://spoonacular.com/recipes/lamb-tagine-97586\">Lamb Tagine</a>.",
            "cuisines": [],
            "dishTypes": ["lunch", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Saute lamb chops in 2 teaspoons of olive oil.",
                    "ingredients": [{
                        "id": 17305,
                        "name": "lamb chop",
                        "localizedName": "lamb chop",
                        "image": "lamb-chops.png"
                    }, {"id": 4053, "name": "olive oil", "localizedName": "olive oil", "image": "olive-oil.jpg"}],
                    "equipment": []
                }, {
                    "number": 2,
                    "step": "Place 2 teaspoons of olive oil in a wok and add onions, carrots, salt and pepper, oregano and stock.",
                    "ingredients": [{
                        "id": 1102047,
                        "name": "salt and pepper",
                        "localizedName": "salt and pepper",
                        "image": "salt-and-pepper.jpg"
                    }, {
                        "id": 4053,
                        "name": "olive oil",
                        "localizedName": "olive oil",
                        "image": "olive-oil.jpg"
                    }, {
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }, {
                        "id": 2027,
                        "name": "oregano",
                        "localizedName": "oregano",
                        "image": "oregano.jpg"
                    }, {
                        "id": 11282,
                        "name": "onion",
                        "localizedName": "onion",
                        "image": "brown-onion.png"
                    }, {"id": 1006615, "name": "stock", "localizedName": "stock", "image": "chicken-broth.png"}],
                    "equipment": [{"id": 404666, "name": "wok", "localizedName": "wok", "image": "wok.png"}]
                }, {
                    "number": 3,
                    "step": "Add lamb, mushrooms and peas.In a separate bowl, mix parsley, lemon juice and cinnamon.",
                    "ingredients": [{
                        "id": 9152,
                        "name": "lemon juice",
                        "localizedName": "lemon juice",
                        "image": "lemon-juice.jpg"
                    }, {
                        "id": 11260,
                        "name": "mushrooms",
                        "localizedName": "mushrooms",
                        "image": "mushrooms.png"
                    }, {
                        "id": 2010,
                        "name": "cinnamon",
                        "localizedName": "cinnamon",
                        "image": "cinnamon.jpg"
                    }, {
                        "id": 11297,
                        "name": "parsley",
                        "localizedName": "parsley",
                        "image": "parsley.jpg"
                    }, {
                        "id": 10017224,
                        "name": "lamb",
                        "localizedName": "lamb",
                        "image": "lamb-shanks.jpg"
                    }, {"id": 11304, "name": "peas", "localizedName": "peas", "image": "peas.jpg"}],
                    "equipment": [{"id": 404783, "name": "bowl", "localizedName": "bowl", "image": "bowl.jpg"}]
                }, {
                    "number": 4,
                    "step": "Add this mixture to the wok.",
                    "ingredients": [],
                    "equipment": [{"id": 404666, "name": "wok", "localizedName": "wok", "image": "wok.png"}]
                }, {
                    "number": 5,
                    "step": "Serve with couscous.",
                    "ingredients": [{
                        "id": 20028,
                        "name": "couscous",
                        "localizedName": "couscous",
                        "image": "couscous-cooked.jpg"
                    }],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/lamb-tagine-stew-649248"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 3,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 171,
            "spoonacularScore": 34.0,
            "healthScore": 2.0,
            "creditsText": "Afrolems",
            "license": "CC BY 4.0",
            "sourceName": "Afrolems",
            "pricePerServing": 73.98,
            "id": 769754,
            "title": "Beef Carrot Stew",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "http://www.afrolems.com/2016/05/26/beef-carrot-stew/",
            "image": "https://spoonacular.com/recipeImages/769754-312x231.jpg",
            "imageType": "jpg",
            "summary": "Beef Carrot Stew might be just the soup you are searching for. For <b>83 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, and whole 30 recipe has <b>101 calories</b>, <b>3g of protein</b>, and <b>4g of fat</b> per serving. If you have seasoning cubes, curry, bulb of onion, and a few other ingredients on hand, you can make it. 171 person were impressed by this recipe. It will be a hit at your <b>Autumn</b> event. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 45%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/oven-braised-beef-stew-with-carrot-parsnip-and-lancinato-kale-43670\">Oven-braised Beef Stew With Carrot, Parsnip, And Lancinato Kale</a>, <a href=\"https://spoonacular.com/recipes/a-winters-walk-beef-and-carrot-stew-with-herb-crusted-dumplings-101808\">A Winter's Walk Beef and Carrot Stew With Herb Crusted Dumplings</a>, and <a href=\"https://spoonacular.com/recipes/hearty-beef-stew-a-filling-beef-stew-can-be-made-easily-in-your-crockpot-599542\">Hearty Beef Stew – a filling beef stew can be made easily in your crockpot</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": ["side dish"],
            "diets": ["gluten free", "dairy free", "paleolithic", "primal"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Scrape, wash and boil your carrots till soft.",
                    "ingredients": [{
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }],
                    "equipment": []
                }, {
                    "number": 2,
                    "step": "Place in a blender without water and grind till completely shredded.In a pot, heat up your oil and fry your onions, garlic and ginger.",
                    "ingredients": [{
                        "id": 11215,
                        "name": "garlic",
                        "localizedName": "garlic",
                        "image": "garlic.png"
                    }, {"id": 11216, "name": "ginger", "localizedName": "ginger", "image": "ginger.png"}, {
                        "id": 11282,
                        "name": "onion",
                        "localizedName": "onion",
                        "image": "brown-onion.png"
                    }, {"id": 14412, "name": "water", "localizedName": "water", "image": "water.png"}, {
                        "id": 4582,
                        "name": "cooking oil",
                        "localizedName": "cooking oil",
                        "image": "vegetable-oil.jpg"
                    }],
                    "equipment": [{
                        "id": 404726,
                        "name": "blender",
                        "localizedName": "blender",
                        "image": "blender.png"
                    }, {"id": 404752, "name": "pot", "localizedName": "pot", "image": "stock-pot.jpg"}]
                }, {
                    "number": 3,
                    "step": "Pour in your Tatashe-pepper mix and your beef and allow to simmer on low heat for about 10-15 minutes.Season with curry, seasoning cubes and anything else you may wish to add.",
                    "ingredients": [{
                        "id": 0,
                        "name": "seasoning cube",
                        "localizedName": "seasoning cube",
                        "image": "stock-cube.jpg"
                    }, {"id": 1002030, "name": "pepper", "localizedName": "pepper", "image": "pepper.jpg"}, {
                        "id": 2015,
                        "name": "curry powder",
                        "localizedName": "curry powder",
                        "image": "curry-powder.jpg"
                    }, {"id": 23572, "name": "beef", "localizedName": "beef", "image": "beef-cubes-raw.png"}],
                    "equipment": [],
                    "length": {"number": 15, "unit": "minutes"}
                }, {
                    "number": 4,
                    "step": "Pour in your carrots and stir in and allow to simmer on low heat for another 3-5 minutes.",
                    "ingredients": [{
                        "id": 11124,
                        "name": "carrot",
                        "localizedName": "carrot",
                        "image": "sliced-carrot.png"
                    }],
                    "equipment": [],
                    "length": {"number": 5, "unit": "minutes"}
                }, {
                    "number": 5,
                    "step": "Add your chopped scent leaves and stir in and serve hot with rice, yam, plantain, pasta or any other accompaniment of your choice. ",
                    "ingredients": [{
                        "id": 9277,
                        "name": "plantain",
                        "localizedName": "plantain",
                        "image": "plantains.jpg"
                    }, {"id": 20420, "name": "pasta", "localizedName": "pasta", "image": "fusilli.jpg"}, {
                        "id": 20444,
                        "name": "rice",
                        "localizedName": "rice",
                        "image": "uncooked-white-rice.png"
                    }, {"id": 11601, "name": "yam", "localizedName": "yam", "image": "sweet-potato.png"}],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/beef-carrot-stew-769754"
        }, {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 79.0,
            "healthScore": 50.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 171.08,
            "id": 639569,
            "title": "Classic Beef Stew",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/PLK8MGFC/classic-beef-stew",
            "image": "https://spoonacular.com/recipeImages/639569-312x231.jpg",
            "imageType": "jpg",
            "summary": "Classic Beef Stew could be just the <b>gluten free and dairy free</b> recipe you've been looking for. For <b>$1.71 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>34g of protein</b>, <b>9g of fat</b>, and a total of <b>285 calories</b>. This recipe serves 6. <b>Autumn</b> will be even more special with this recipe. Not a lot of people really liked this main course. Head to the store and pick up sugar, celery stalks, worcestershire sauce, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. 1 person were glad they tried this recipe. It is brought to you by Foodista. With a spoonacular <b>score of 79%</b>, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/classic-beef-stew-429515\">Classic Beef Stew</a>, <a href=\"https://spoonacular.com/recipes/classic-beef-stew-173502\">Classic Beef Stew</a>, and <a href=\"https://spoonacular.com/recipes/classic-beef-stew-18593\">Classic Beef Stew</a>.",
            "cuisines": [],
            "dishTypes": ["lunch", "soup", "main course", "main dish", "dinner"],
            "diets": ["gluten free", "dairy free"],
            "occasions": ["fall", "winter"],
            "analyzedInstructions": [{
                "name": "",
                "steps": [{
                    "number": 1,
                    "step": "Brown meat in the olive oil in a skillet on the stove top over medium high heat (2-3 minutes).",
                    "ingredients": [{
                        "id": 4053,
                        "name": "olive oil",
                        "localizedName": "olive oil",
                        "image": "olive-oil.jpg"
                    }, {"id": 1065062, "name": "meat", "localizedName": "meat", "image": "whole-chicken.jpg"}],
                    "equipment": [{
                        "id": 404794,
                        "name": "stove",
                        "localizedName": "stove",
                        "image": "oven.jpg"
                    }, {"id": 404645, "name": "frying pan", "localizedName": "frying pan", "image": "pan.png"}],
                    "length": {"number": 3, "unit": "minutes"}
                }, {
                    "number": 2,
                    "step": "Place into crock pot",
                    "ingredients": [],
                    "equipment": [{
                        "id": 404718,
                        "name": "slow cooker",
                        "localizedName": "slow cooker",
                        "image": "slow-cooker.jpg"
                    }]
                }, {
                    "number": 3,
                    "step": "Add the 2 cups of water water and all ingredients to the crock pot. Cook in crock pot on low for 8 hours or on high for 4 hours.",
                    "ingredients": [{"id": 14412, "name": "water", "localizedName": "water", "image": "water.png"}],
                    "equipment": [{
                        "id": 404718,
                        "name": "slow cooker",
                        "localizedName": "slow cooker",
                        "image": "slow-cooker.jpg"
                    }],
                    "length": {"number": 720, "unit": "minutes"}
                }, {
                    "number": 4,
                    "step": "45 minutes before serving, in a small bowl mix  cup of cold water and 2 tbs of corn starch together and mix until corn starch is dissolved. Once dissolved, add to the crock pot.",
                    "ingredients": [{
                        "id": 20027,
                        "name": "corn starch",
                        "localizedName": "corn starch",
                        "image": "white-powder.jpg"
                    }, {"id": 14412, "name": "water", "localizedName": "water", "image": "water.png"}],
                    "equipment": [{
                        "id": 404718,
                        "name": "slow cooker",
                        "localizedName": "slow cooker",
                        "image": "slow-cooker.jpg"
                    }, {"id": 404783, "name": "bowl", "localizedName": "bowl", "image": "bowl.jpg"}],
                    "length": {"number": 45, "unit": "minutes"}
                }, {
                    "number": 5,
                    "step": "Add the packet of Hidden Valley Ranch dressing mix as well.",
                    "ingredients": [{
                        "id": 93733,
                        "name": "dry ranch dressing mix",
                        "localizedName": "dry ranch dressing mix",
                        "image": "oregano-dried.png"
                    }],
                    "equipment": []
                }]
            }],
            "spoonacularSourceUrl": "https://spoonacular.com/classic-beef-stew-639569"
        }], "offset": 0, "number": 10, "totalResults": 74
    }

    useEffect(() => {


        async function fetchData() {
            if (endpoint.length > 0) {
                setErrorIngredient(false);

                // try {
                //     const result = await axios.get(endpoint);
                //     setRecipes(result);
                // } catch (error) {
                //     setErrorIngredient(true);
                //     console.error(error);
                // }
                setRecipes(tijdelijk);
            }
        }

        fetchData();
    }, [endpoint])

    function onFormSubmit(e) {
        e.preventDefault();
        let add = `&addRecipeInformation=true`
        if (Object.keys(ingredient).length > 0) {
            add += `&includesIngredients=${ingredient.replace(" ", "")}`;
        }
        if (Object.keys(recipeName).length > 0)
            add += `&query=${recipeName}`;

        setEndpoint(url + add);
    }

    return (
        <>
            <div className="basic-form">
                <h1>Recipe Generator</h1>
                <form className="searchbars" onSubmit={onFormSubmit}>
                    <label htmlFor="ingredient">Ingredients:</label>
                    <input
                        type="text"
                        name="ingredients"
                        id="ingredient"
                        placeholder="eggplant, apple, tomato,"
                        onChange={(e) => setIngredient(e.target.value)}
                    />
                    <label htmlFor="recipe-name">Name of a recipe:</label>
                    <input
                        type="text"
                        name="recipe-names"
                        id="recipe-name"
                        placeholder="stew"
                        onChange={(e) => setRecipeName(e.target.value)}
                    />
                    {/*<label htmlFor="category">*/}
                    {/*    <input type="text" id="category" placeholder="what kind of dish?"/>*/}
                    {/*</label>*/}

                    <div>
                        {/*<button className="buttons" type="button">willekeurig recept</button>*/}
                        <button className="buttons" type="submit">Search</button>
                    </div>
                    {errorIngredient && <span>
                       We didn't find any results with your entry.
                    </span>}
                </form>
            </div>
            <div className="results">
                {Object.keys(recipes).length > 0 && recipes.results.map(() => {
                        return (
                            <article key={recipes.results.id} className="recipe-tile">
                                <img src={recipes.results.image} alt="recipes"/>
                                <h1>{recipes.results.title}</h1>
                                <h6>source: {recipes.results.sourceName}</h6>
                            </article>
                        )
                    }
                )
                }

                {/*    Wanneer je naar de receptenpagina wilt, moet er een nieuwe datarequest komen*/}
                {/*    - met het ophalen van de sourceUrl van het recept om eventueel door te linken*/}
                {/*    - met het ophalen van de benodigdheden. */}
                {/*    - er is een instructions string en een analyzedInstruction object.*/}
            </div>
        </>
    )
}

export default RecipeSearch;
