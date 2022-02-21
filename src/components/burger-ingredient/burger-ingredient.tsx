import React from 'react';
import cn from 'classnames';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-ingredient.module.css';
import  {Ingredient} from '../../model/ingredient'

const BurgerIngredient: React.FunctionComponent<Ingredient> = (item) => {
    return (
        <div className={cn(styles.card)}>
            <img
                className={cn(styles.image, 'mb-1')}
                src={item.image_large}
                alt={item.name}
            />
            <Counter count={1} size='small' />
            <PriceItem price={item.price} classMarg='mr-1' />
            <p className={cn('text text_type_main-default', styles.container__description)}>
                {item.name}
            </p>
        </div>
    );
};

export default BurgerIngredient;