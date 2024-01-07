import './index.css';
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
// TODO: Import IngredientList
import IngredientList from './IngredientList';
function App() {
  // TODO: Add recipe object
  const recipe = {
    title: 'Mashed potatoes',
    feedback: {
      rating: 4.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: '4 Tbsp butter', prepared: false },
      { name: '1/8 cup heavy cream', prepared: false },
      { name: 'Salt', prepared: true },
      { name: 'Pepper', prepared: true },
    ],
  };

  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      {/*Note: if the value that i wanted to use for title had been a string literal, i could set the propperty by using the syntax title='Recipe title*/}
      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.ingredients} />
    </article>
  );
}

export default App;
