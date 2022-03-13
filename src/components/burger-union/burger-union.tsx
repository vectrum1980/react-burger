import React from 'react'
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"
import styles from './burger-union.module.css';
import cn from 'classnames';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from '../../hooks/useDispatch';
import { Ingredient } from '../../model/ingredient'
import { ADD_INGREDIENTS, INCREASE_INGREDIENT } from '../../services/constants/ingredietns';

const BurgerUnion: React.FunctionComponent = () => {    
    
      const dispatch = useDispatch();
      const handleDrop = (item: Ingredient) => {
        const newItem = { ...item, unicId: Math.random() };
        dispatch({
          type: ADD_INGREDIENTS,
          item: newItem
        });
        dispatch({
          type: INCREASE_INGREDIENT,
          key: item._id,
          typeItem: item.type,
        });
      };

    return (
        <main className={cn(styles.main, 'p-10')}>
            <div className={styles.columns}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConstructor onDropHandler={handleDrop}/>
                </DndProvider>
            </div>
        </main>
    );
};

export default BurgerUnion; 