import React from "react";

export default function Search(props) {

    const display = {
        display: props.ingredientList.length > 0 ? "flex" : "none"
    }
    
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
      <div className="ingredientList" style={display}>
        <h1>Ingredients on hand:</h1>
        <ul>{props.ingredientList}</ul>
      </div>
    </main>
  );
}
