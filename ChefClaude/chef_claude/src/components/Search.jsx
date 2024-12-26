import React from "react";

export default function Search(props) {
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
        </main>
  );
}
