import React, { memo, useEffect } from 'react';
import cn from 'classnames';
import styles from './feed.module.css';
import FeedOrders from '../../components/feed-orders/feed-orders';
import OrdersList from '../../components/orders-list/orders-list';
import { useDispatch } from '../../hooks/useDispatch';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../../services/constants/ws';


function Feed() {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch({ type: WS_CONNECTION_START });
      return () => {
        dispatch({ type: WS_CONNECTION_CLOSE })
      }
    },
    [dispatch]
  );

  return (
    <div className={cn(styles.columns, 'p-10')}>
      <FeedOrders />
      <OrdersList />
    </div>
  );
}

export default memo(Feed);
