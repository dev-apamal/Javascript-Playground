import Header from "./components/Header";
import Search from "./components/Search";
import React from "react";

export default function App() {
  const [ingredient, setIngredient] = React.useState([]);

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

  function getRecipe(){
    console.log("Here's your recipe")
  }

  return (
    <>
      <Header />
      <Search handleSubmit={handleSubmit} ingredientList={ingredientList} getRecipe={getRecipe}/>
    </>
  );
}
