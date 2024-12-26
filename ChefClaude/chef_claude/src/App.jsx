import Header from "./components/Header";
import Search from "./components/Search";
import IngredientsList from "./components/IngredientsList";
import React from "react";
import Recipe from "./components/Recipe";

export default function App() {
  const [ingredient, setIngredient] = React.useState([]);
  const [getRecipe, setGetRecipe] = React.useState(false)

  const ingredientList = ingredient.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const newIngredient = data.get("ingredient");
    if (newIngredient) {
      setIngredient((prevIngredient) => [...prevIngredient, newIngredient]);
    }
    event.target.reset();
  }
  
  function changeRecipeStatus(){
    return setGetRecipe(prevRecipe => !prevRecipe)
  }

  return (
    <>
      <Header />
      <Search handleSubmit={handleSubmit}/>
      <IngredientsList ingredientList={ingredientList} getRecipe={changeRecipeStatus}/>
      <Recipe getRecipe={getRecipe}/>
    </>
  );
}
