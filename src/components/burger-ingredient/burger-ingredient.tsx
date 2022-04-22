import React from 'react';
import cn from 'classnames';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-ingredient.module.css';
import { Ingredient } from '../../model/ingredient'
import { useDrag } from 'react-dnd';
import { useSelector } from '../../hooks/useSelector';

const BurgerIngredient: React.FunctionComponent<Ingredient> = (item) => {

    const COUNT_BUN = 2

    const [{ isDrag }, dragRef] = useDrag({
        type: 'ingredient',
        item,
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });

    const { counts, bun } = useSelector(
        (store) => store.ingredients.burgerIngredients
    );
    const isBun = item.type === 'bun';
    const count =
        isBun && bun && bun._id === item._id
            ? COUNT_BUN
            : counts[item._id] && counts[item._id];

    const opacity = isDrag ? 0.5 : 1;

    return (
        <div className={cn(styles.card)}
            ref={dragRef}
            style={{ opacity }}>
            <img
                className={cn(styles.image, 'mb-1')}
                src={item.image_large}
                alt={item.name}
            />
            {count ? <Counter count={count} size='small' /> : null}
            <PriceItem price={item.price} classes='text_type_main-medium mr-1' />
            <p className={cn('text text_type_main-default', styles.container__description)}>
                {item.name}
            </p>
        </div>
    );
};

export default BurgerIngredient;