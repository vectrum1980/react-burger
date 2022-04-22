import React, { useEffect } from 'react';
import cn from 'classnames';
import { useParams, Redirect, useRouteMatch } from 'react-router-dom';
import PriceItem from '../../components/price-item/price-item';
import styles from './order.module.css';
import { useSelector } from '../../hooks/useSelector';
import { getOrder, getUserOrder } from '../../services/actions/orders';
import Preloader from '../../components/preloader/preloader';
import { convertDate, getStatus, getPrice, getBurgerIngredients, getBurgerIngredientsObjWithCount } from '../../utils/functions';
import { useDispatch } from '../../hooks/useDispatch';

const Order: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const isProfile = !!useRouteMatch("/profile");
  const { id } = useParams<{ id: string }>();
  useEffect(
    () => {
      dispatch(isProfile
        ? getUserOrder(id)
        : getOrder(id)
      )
    },
    [dispatch, isProfile, id]
  );
  const { ingredients } = useSelector((store) => store.ingredients)
  const order = useSelector((store) => store.orders.currentOrder)
  const { orderLoaded } = useSelector((store) => store.orders)
  const date = order && order.createdAt && convertDate(order?.createdAt);
  const burgerIngredients = order && order.ingredients && getBurgerIngredients(order?.ingredients, ingredients)
  const uniqItems: Array<string> = Array.from(new Set(order?.ingredients))
  const bI = burgerIngredients && getBurgerIngredientsObjWithCount(burgerIngredients)
  const burgerPrice = burgerIngredients && getPrice(burgerIngredients)
  const name = order?.name
  const status = order?.status;
  const st = status ? getStatus(status) : null;

  if (orderLoaded && !order) return <Redirect to='/' />;

  if (!order) {
    return <Preloader />;
  }

  return (
    <div className={styles.container}>
      <span className={cn('text text_type_digits-default')}>#{id}</span>
      <h1
        className={cn('text text_type_main-medium','mb-3', 'mt-10', styles.title)}>
        {name}
      </h1>
      <p
        className={cn('text text_type_main-default','mb-15', styles.status, styles[`status_color_${st?.textColor}`])}>
        {st?.text}
      </p>
      <p className={cn('text text_type_main-medium', 'mb-6', styles.title)}>
        Состав:
      </p>
      <ul className={cn(styles.list, 'mb-10')}>
        {uniqItems.map((el: string, i: number) => {
          return <li className={cn(styles['list-item'], 'mr-6')} key={i}>
            <div className={cn(styles.icon, 'mr-4')}>
              <img src={bI?.item[el]?.image_mobile} alt='Вкусная булка' className={cn(styles.image)} />
            </div>
            <p
              className={cn(styles.ingredient, 'mr-4','text text_type_main-default')}>
              {bI?.item[el]?.name}
            </p>
            <span className={cn('mr-1', 'text text_type_digits-default')}>
              {bI?.count[el]} x{' '}
            </span>
            <PriceItem price={bI?.item[el]?.price || 0} />
          </li>
        })}
      </ul>
      <div className={styles.info}>
        <span className={cn('text text_type_main-default text_color_inactive')}>
          {date}
        </span>
        <PriceItem price={burgerPrice || 0} />
      </div>
    </div>
  );
}

export default Order;
