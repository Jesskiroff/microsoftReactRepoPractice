import React from 'react';
import './RecipeTitle.css';
// TODO: Create RecipeTitle component
function RecipeTitle(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <h3 className={props.feedback.rating <= 3.5 ? 'red' : 'green'}>
        {props.feedback.rating} from {props.feedback.reviews} reviews
      </h3>
    </section>
  )
};
export default RecipeTitle;

/* RecipeTitle looks similar to a base React component, with two key updates.

First, it accepts a parameter named props. This will automatically contain all attributes or properties passed into the component when it's used.

Second, you're able to use the values contained in props like you would any normal parameter. 
You're looking for one value named title, which you display inside an h2 element. */
