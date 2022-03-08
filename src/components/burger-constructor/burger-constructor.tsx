import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-constructor.module.css';
import BurgerItem from '../burger-item/burger-item';
import { Ingredient } from '../../model/ingredient'
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { getOrder } from '../../services/actions/orders';
import { useSelector } from '../../hooks/useSelector';
import { DELETE_INGREDIENT, DECREASE_INGREDIENT, UPDATE_CONSTRUCTOR } from '../../services/constants/ingredietns';
import { CLEAR_ORDER_NUMBER } from '../../services/constants/orders';
import { IngredientWithUnicId } from '../../model/ingredient';



const BurgerConstructor: React.FunctionComponent<{
  onDropHandler: (item: Ingredient) => void;
}> = ({ onDropHandler }) => {

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(item: Ingredient) {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const { bun, ingredients } = useSelector(
    (store) => store.ingredients.burgerIngredients
  );

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    const bunPrice = bun ? bun.price : 0;
    const price = bunPrice * 2 + ingredients.reduce((acc: any, curr: any) => (acc += curr.price), 0);
    setTotalPrice(price);
  }, [bun, ingredients]);

  function handleClick() {
    dispatch({
      type: CLEAR_ORDER_NUMBER      
    });
    const id = ingredients
      .map((item: Ingredient) => {
        return item._id;
      })
      .concat(bun._id);
    history.push({
      pathname: '/order',
      state: {
        background: location
      }
    });
    dispatch(getOrder(id));
  }

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      dispatch({
        type: UPDATE_CONSTRUCTOR,
        toIndex: hoverIndex,
        fromIndex: dragIndex,
      });
    },
    [dispatch]
  );

  return (
    <section className={cn(styles.container, 'pl-4')}>
      <div ref={dropTarget}
        className={cn(styles['burger-container'])}>
        {bun && (
          <div className={'mr-8'}>
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
        <ul className={cn(styles.list, 'pr-4')}>
          {ingredients.map((el: IngredientWithUnicId, index: any) => {
            const deleteIngredient = () => {
              dispatch({
                type: DELETE_INGREDIENT,
                id: el.unicId,
              });
              dispatch({
                type: DECREASE_INGREDIENT,
                key: el._id,
                typeItem: el.type,
              });
            };
            return (
              <BurgerItem
                item={el}
                key={el.unicId}
                index={index}
                deleteIngredient={deleteIngredient}
                moveItem={moveItem} />
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
