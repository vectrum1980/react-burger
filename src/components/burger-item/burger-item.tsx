import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-item.module.css';
import { Burger } from '../../model/burger'


const BurgerItem: React.FunctionComponent<Burger> = (props) => {
  return (
    <li className={styles.item}>
      <DragIcon type='primary' />
      <ConstructorElement
        text={props.item.name}
        price={props.item.price}
        thumbnail={props.item.image}
      />
    </li>
  );
}

export default BurgerItem;
