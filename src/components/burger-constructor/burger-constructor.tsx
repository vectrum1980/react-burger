import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceItem from '../price-item/price-item';
import styles from './burger-constructor.module.css';
import BurgerItem from '../burger-item/burger-item';
import { Ingredient } from '../../model/ingredient'


const BurgerConstructor: React.FunctionComponent = () => {

  const [bun, setBun] = useState<Ingredient>()
  const [ingredients, setIngredients] = useState<Ingredient[]>([])

  useEffect(() => {
    setBun({
      "_id": "60666c42cc7b410027a1a9b1",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
    })

    setIngredients([{
      "_id": "60666c42cc7b410027a1a9b7",
      "name": "Соус Spicy-X",
      "type": "sauce",
      "proteins": 30,
      "fat": 20,
      "carbohydrates": 40,
      "calories": 30,
      "price": 90,
      "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
      "__v": 0
    },
    {
      "_id": "60666c42cc7b410027a1a9b4",
      "name": "Мясо бессмертных моллюсков Protostomia",
      "type": "main",
      "proteins": 433,
      "fat": 244,
      "carbohydrates": 33,
      "calories": 420,
      "price": 1337,
      "image": "https://code.s3.yandex.net/react/code/meat-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/meat-02-large.png",
      "__v": 0
    },
    {
      "_id": "60666c42cc7b410027a1a9bb",
      "name": "Хрустящие минеральные кольца",
      "type": "main",
      "proteins": 808,
      "fat": 689,
      "carbohydrates": 609,
      "calories": 986,
      "price": 300,
      "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
      "__v": 0
    },
    {
      "_id": "60666c42cc7b410027a1a9bb",
      "name": "Хрустящие минеральные кольца",
      "type": "main",
      "proteins": 808,
      "fat": 689,
      "carbohydrates": 609,
      "calories": 986,
      "price": 300,
      "image": "https://code.s3.yandex.net/react/code/mineral_rings.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
      "__v": 0
    },])

  }, []);


  const handleClick = () => {

  };

  return (
    <section className={cn(styles.container, 'pl-4')}>
      <div className={cn(styles['burger-container'])}>
        {bun && (
          <div className={'mr-8'} data-cy="up-bun">
            <ConstructorElement
              type='top'
              isLocked={true}
              text={`${bun.name}`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}

        <ul className={cn(styles.list, 'pr-4')} data-cy="other-ingredients-container">
          {ingredients.map((el: Ingredient, index) => {
            return (
              <BurgerItem item={el} key={index} />
            );
          })}
        </ul>
        {bun && (
          <div className={'mr-8'}>
            <ConstructorElement
              type='bottom'
              isLocked={true}
              text={`${bun.name}`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
      </div>

      <div className={cn(styles.order, 'mt-10')}>
        {ingredients.length || bun ? (
          <PriceItem price={1010} classMarg='mr-10' />
        ) : null}
        {bun && (
          <Button type='primary' size='large' onClick={handleClick}>
            Оформить заказ
          </Button>
        )}
      </div>
    </section>
  );
}

export default BurgerConstructor;
