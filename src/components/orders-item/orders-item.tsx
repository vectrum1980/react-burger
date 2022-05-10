import React from 'react';
import cn from 'classnames';
import PriceItem from '../price-item/price-item';
import styles from './orders-item.module.css';
import { useSelector } from '../../hooks/useSelector';
import { convertDate, getPrice, getBurgerIngredients } from '../../utils/functions';
import { getStatus } from '../../utils/functions';
import { Ingredient } from '../../model/ingredient'

type Props = {
  number: number;
  name: string;
  allIngredients: Array<string>;
  createdAt: string;
  status?: string;
}

const OrdersItem: React.FunctionComponent<Props> = ({ number, name, allIngredients, createdAt, status }) => {
  const { ingredients } = useSelector((store) => store.ingredients);
  const stringWithDay = convertDate(createdAt);
  const burgerIngredients = getBurgerIngredients(allIngredients, ingredients);
  const burgerItem = burgerIngredients.slice(0, 6);
  const count = burgerIngredients.length;
  let ing = 6;
  const numberIngredients = count - 6;
  const burgerPrice = getPrice(burgerIngredients);
  const st = status ? getStatus(status) : null;

  return <>
    <div className={cn(styles['orders-item'], 'p-6')}>
      <div className={cn(styles['orders-info'])}>
        <span className='text text_type_digits-default'>#{number}</span>
        <span className={'text text_type_main-default text_color_inactive'}>
          {stringWithDay}
        </span>
      </div>
      <div>
        <h2 className={cn('text text_type_main-medium', 'mb-2')}>{name}</h2>
        {status ? (
          <span
            className={cn(
              'text text_type_main-default',
              styles[`status_color_${st?.textColor}`]
            )}
          >
            {st?.text}
          </span>
        ) : null}
      </div>
      <div className={cn(styles['orders-info'])}>
        <ul className={cn(styles.list)}>
          {burgerItem.map((el: Ingredient, i: number) => {
            ing -= 1
            return (
              <li className={styles['list-item']} key={i} style={{ zIndex: ing }}>
                <div className={cn(styles.icon)}>
                  <img src={el.image_mobile} className={cn(styles.image)} alt='ингредиент бургера' />
                </div>
              </li>
            )
          })}
          {count > 6 ? (<div className={styles.overlay}>
            <span>{`+${numberIngredients}`}</span>
          </div>) : null}
        </ul>
        <PriceItem price={burgerPrice} />
      </div>
    </div >
  </>

}
export default OrdersItem;
