import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from './user-orders.module.css';
import { Link, useLocation } from 'react-router-dom';
import OrdersItem from '../orders-item/orders-item';
import { useDispatch } from '../../hooks/useDispatch';
import { useSelector } from '../../hooks/useSelector';
import { WS_CONNECTION_START_AUTH, WS_CONNECTION_CLOSE_AUTH } from '../../services/constants/ws-auth';
import { Order } from '../../model/order';

const UserOrders: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(
        () => {
            dispatch({ type: WS_CONNECTION_START_AUTH });
            return () => {
                dispatch({ type: WS_CONNECTION_CLOSE_AUTH })
                return;
            }
        },
        [dispatch]
    );

    const { orders } = useSelector((store) => store.wsAuth);
    return (
        <ul className={cn(styles.list, 'mb-20')}>
            {orders?.map((el: Order, i: number) => (
                <li className={cn(styles['list-item'])} key={i}>
                    <Link to={{
                        pathname: `/profile/orders/${el.number}`, state: { background: location }
                    }}
                        className={styles['burger-link']}>
                        <OrdersItem
                            number={el.number}
                            name={el.name}
                            allIngredients={el.ingredients}
                            createdAt={el.createdAt}
                            status={el.status}
                        />
                    </Link>
                </li>
            ))
            }
        </ul >

    );
}

export default UserOrders;