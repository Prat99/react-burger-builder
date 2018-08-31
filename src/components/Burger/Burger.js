import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';
import { withRouter } from 'react-router-dom';
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map((igkey) => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredients type={igkey} key={igkey + i} />
        });
    }).reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = "Please start adding ingredients";
    }
    return (
        <div className={classes.Burger}>
            <p>your perfect burger</p>
            {/* <span>Final Price: {Number(props.finalPrice.toFixed(2))}$</span> */}
            {/* <div className={classes.BurgerIng}> */}
                <BurgerIngredients type='bread-top'>
                </BurgerIngredients>
                {transformedIngredients}
                <BurgerIngredients type='bread-bottom'>
                </BurgerIngredients>
            {/* </div> */}
        </div>
    )
}

export default withRouter(burger);