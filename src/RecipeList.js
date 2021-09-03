import React from 'react';
import Recipe from './Recipe';

export default function RecipeList(props) {
  return (
    <div>
      <div>
        {props.recipes.map((recipe) => (
          <Recipe {...recipe} key={recipe.id} />
        ))}
      </div>
      <button>Add recipe</button>
    </div>
  );
}
