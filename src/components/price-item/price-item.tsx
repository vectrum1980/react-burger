import React, { FC } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './price-item.module.css';
import cn from 'classnames';

export type TProps = {
	price: number;
	classMarg?: string;
}


const PriceItem: FC<TProps> = ({ price, classMarg }) => {
  return (
    <span className={cn(styles['element-price'], 'text', [classMarg])}>
      {price}
      <CurrencyIcon type='primary' />
    </span>
  );
}

export default PriceItem;