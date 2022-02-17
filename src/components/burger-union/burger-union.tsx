import React from 'react'
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"
import styles from './burger-union.module.css';
import cn from 'classnames';

const BurgerUnion: React.FunctionComponent = () => {

    return (
        <main className={cn(styles.main, 'p-10')}>
            <div className={styles.columns}>
                <BurgerIngredients />
                <BurgerConstructor />
            </div>
        </main>
    );
};

export default BurgerUnion; 