import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';
const burger = (props) => {
  return (
      <div className={classes.Burger}>
           <p>your perfect burger</p>
          <BurgerIngredients type='bread-top'></BurgerIngredients>
          <BurgerIngredients type='cheese'></BurgerIngredients>
          <BurgerIngredients type='meat'></BurgerIngredients>
          <BurgerIngredients type='bread-bottom'></BurgerIngredients>
      </div>
  )
}

export default burger;