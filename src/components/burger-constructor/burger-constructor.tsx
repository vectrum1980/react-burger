import React, { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-constructor.module.css';
import BurgerItem from '../burger-item/burger-item';
import { Ingredient } from '../../model/ingredient'
import { Bun, Ingredients } from '../../model/order'
import { useLocation, useHistory } from 'react-router-dom';
import { BurgerConstructorContext } from '../../contexts/burger-constructor-context';
import { IBurgerConstructorContext } from '../../model/burger-constructor-context'


const BurgerConstructor: React.FunctionComponent = () => {

  const [bun, setBun] = useState<Ingredient>()
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const history = useHistory();
  const location = useLocation();
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const { getOrderNumber } = useContext(BurgerConstructorContext) as IBurgerConstructorContext;

  useEffect(() => {
    setBun(Bun)
    setIngredients(Ingredients)
  }, []);

  useEffect(() => {

    const bunPrice = bun ? bun.price : 0;
    const price = bunPrice * 2 + ingredients.reduce((acc, curr) => (acc += curr.price), 0);
    setTotalPrice(price);

  }, [bun, ingredients]);


  const handleClick = () => {
    getOrderNumber();
    history.push({
      pathname: '/order',
      state: {
        background: location
      }
    });
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
          <PriceItem price={totalPrice} classes='text_type_main-large mr-10' />
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
