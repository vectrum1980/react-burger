import React from 'react';
import cn from 'classnames';
import styles from './order-details.module.css';
import checkMark from '../../images/check-mark.png';


const OrderDetails: React.FunctionComponent = () => {

    const number = "034536";

    return (
        <div className={cn(styles.order, 'p-15')}>
            <h1 className={cn(styles.title, 'text', 'text_type_digits-large', 'mb-8')}>
                {number}
            </h1>
            <p className={cn('text', 'text_type_main-medium')}>
                идентификатор заказа
            </p>
            <img src={checkMark} alt='img' className={cn(styles.image, 'mt-15', 'mb-15')} />
            <p className={cn('text', 'text_type_main-default', 'mb-2')}>
                Ваш заказ начали готовить
            </p>
            <p className={cn('text', 'text_type_main-default', 'text_color_inactive')}>
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    );
}

export default OrderDetails;
