import React from "react";

export default function Search(props) {
    const hasIngredients = props.ingredientList.length > 0;
    const canGetRecipe = props.ingredientList.length > 4;
    
    return (
        <main>
            <form onSubmit={props.handleSubmit}>
                <input
                type="text"
                placeholder="e.g., oregano"
                name="ingredient"
                id="ingredient"
                />
                <input type="submit" value="+ Add Ingredient" />
            </form>
            {hasIngredients && <div className="ingredientList">
                <h1>Ingredients on hand:</h1>
                <ul>{props.ingredientList}</ul>
            </div>}
            {canGetRecipe && <div className="recipeContainer">
                <div className="recipeContText">
                    <h4>Ready for a recipe?</h4>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className="getRecipe" onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </main>
  );
}
