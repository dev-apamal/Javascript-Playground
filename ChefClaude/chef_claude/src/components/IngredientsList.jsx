export default function IngredientsList(props){
    
    const hasIngredients = props.ingredientList.length > 0;
    const canGetRecipe = props.ingredientList.length > 4;

    return (
        <section>
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
        </section>
    )
}