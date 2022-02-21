import React from 'react'
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"
import styles from './burger-union.module.css';
import cn from 'classnames';
import { Ingredient } from '../../model/ingredient';

const BurgerUnion: React.FunctionComponent<{ ingredients: Ingredient[] }> = ({ ingredients }) => {

    return (
        <main className={cn(styles.main, 'p-10')}>
            <div className={styles.columns}>
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor />
            </div>
        </main>
    );
};

export default BurgerUnion; 