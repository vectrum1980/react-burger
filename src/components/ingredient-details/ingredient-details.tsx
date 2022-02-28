import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './ingredient-details.module.css';
import { Ingredient } from '../../model/ingredient';
import { useParams } from "react-router-dom";
import { find } from "lodash";

const IngredientDetails: React.FunctionComponent<{ ingredients: Ingredient[] }> = ({ ingredients }) => {  

  const { id } = useParams<{ id: string }>();
  const [selectedBurger, setSelectedBurger] = useState<Ingredient>()

  useEffect(() => {
    if (ingredients && ingredients.length) {
       const burger = find(ingredients, function(o) { return o._id === id; })
       setSelectedBurger(burger);
    }
}, [ingredients, id]);

  return <>
    {selectedBurger && <div className={styles.conteainer}>
      <img src={selectedBurger.image_large} alt='описание' />
      <h3 className={styles.title}>{selectedBurger.name}</h3>
      <p className={cn(styles.desc, 'text text_type_main-default')}>описание</p>
      <div className={styles.info}>
        <div className={styles.item}>
          <span className="text text_type_main-small text_color_inactive">Каллорий,ккал</span>
          <span className="text text_type_digits-default text_color_inactive">{selectedBurger.calories}</span>
        </div>
        <div className={styles.item}>
          <span className="text text_type_main-small text_color_inactive">Белки,г</span>
          <span className="text text_type_digits-default text_color_inactive">{selectedBurger.proteins}</span>
        </div>
        <div className={styles.item}>
          <span className="text text_type_main-small text_color_inactive">Жиры,г</span>
          <span className="text text_type_digits-default text_color_inactive">{selectedBurger.fat}</span>
        </div>
        <div className={styles.item}>
          <span className="text text_type_main-small text_color_inactive">Углеводы,г</span>
          <span className="text text_type_digits-default text_color_inactive">{selectedBurger.carbohydrates}</span>
        </div>
      </div>
    </div>}
  </>
}

export default IngredientDetails;
