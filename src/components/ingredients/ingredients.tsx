import React from 'react';
import cn from 'classnames';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { Link, useLocation } from "react-router-dom";
import styles from './ingredients.module.css';
import { Ingredient, IngredientRef } from '../../model/ingredient'

const Ingredients = React.forwardRef<HTMLHeadingElement, IngredientRef>(
    ({ title, ingredients, id }, ref) => {

        const location = useLocation();

        return (
            <section className={'mb-10'}>
                <h2
                    id={id}
                    ref={ref}
                    className={cn(styles.ingredients__title, 'text', 'text_type_main-medium', 'mb-6')}
                >
                    {title}
                </h2>
                <ul className={cn(styles.list, 'ml-4')}>
                    {ingredients.map((el: Ingredient) => (
                        <li className={styles['list-item']} key={el._id}>
                            <Link to={{
                                pathname: `/ingredients/${el._id}`,  
                                state: { background: location }
                            }}
                                className={styles.link}>
                                <BurgerIngredient {...el} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
);
export default Ingredients;