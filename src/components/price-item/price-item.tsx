import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './price-item.module.css';
import cn from 'classnames';

const PriceItem: React.FunctionComponent<{price: number; classes?: string;}> = ({ price, classes }) => {
  return (
    <span className={cn(styles['element-price'], 'text', [classes])}>
      {price}
      <CurrencyIcon type='primary' />
    </span>
  );
}

export default PriceItem;