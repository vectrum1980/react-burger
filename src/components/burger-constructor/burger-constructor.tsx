import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-constructor.module.css';
import BurgerItem from '../burger-item/burger-item';
import { Ingredient } from '../../model/ingredient'
import {Bun, Ingredients} from '../../model/order'


const BurgerConstructor: React.FunctionComponent = () => {

  const [bun, setBun] = useState<Ingredient>()
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    setBun(Bun)
    setIngredients(Ingredients)
  }, []);


  const handleClick = () => {

  };

  return (
    <section className={cn(styles.container, 'pl-4')}>
      <div className={cn(styles['burger-container'])}>
        {bun && (
          <div className={'mr-8'} data-cy="up-bun">
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}

        <ul className={cn(styles.list, 'pr-4')} data-cy="other-ingredients-container">
          {ingredients.map((el: Ingredient, index) => {
            return (
              <BurgerItem item={el} key={index} />
            );
          })}
        </ul>
        {bun && (
          <div className={'mr-8'}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
      </div>

      <div className={cn(styles.order, 'mt-10')}>
        {ingredients.length || bun ? (
          <PriceItem price={1010} classMarg='mr-10' />
        ) : null}
        {bun && (
          <Button type='primary' size='large' onClick={handleClick}>
            Оформить заказ
          </Button>
        )}
      </div>
    </section>
  );
}

export default BurgerConstructor;
