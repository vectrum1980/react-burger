import React, { FC } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './price-item.module.css';
import cn from 'classnames';

export type TProps = {
	price: number;
	classes?: string;
}


const PriceItem: FC<TProps> = ({ price, classes }) => {
  return (
    <span className={cn(styles['element-price'], 'text', [classes])}>
      {price}
      <CurrencyIcon type='primary' />
    </span>
  );
}

export default PriceItem;