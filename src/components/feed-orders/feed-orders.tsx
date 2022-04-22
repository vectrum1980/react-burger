import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import OrdersItem from '../orders-item/orders-item';
import { useSelector } from '../../hooks/useSelector';
import styles from './feed-orders.module.css';
import { Order } from '../../model/order';
import Preloader from '../preloader/preloader';

function FeedOrders() {
  const location = useLocation();
  const { orders } = useSelector((store) => store.ws)

  if (!orders) {
    return <Preloader />
  }

  return (
    <section>
      <h1 className={cn('text', 'text_type_main-large', 'mb-5')}>
        Лента заказов
      </h1>
      <ul className={cn(styles.list)}>
        {orders?.map((el: Order) => (
          <li className={cn(styles['list-item'], 'mb-4')} key={el._id}>
            <Link to={{
              pathname: `/feed/${el.number}`,
              state: { background: location }
            }}
              className={styles.link}>
              <OrdersItem
                number={el.number}
                name={el.name}
                allIngredients={el.ingredients}
                createdAt={el.createdAt}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default memo(FeedOrders);
