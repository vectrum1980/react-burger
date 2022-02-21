import React, { useState, useEffect, useRef } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from '../ingredients/ingredients';
import cn from 'classnames';
import styles from './burger-ingredients.module.css';
import { groupBy } from "lodash";
import { Ingredient } from '../../model/ingredient';

const BurgerIngredients: React.FunctionComponent<{ ingredients: Ingredient[] }> = ({ ingredients }) => {
    
    const [selectedTab, setSelectedTab] = useState<string>('bun')
    const [groupedIngredients, setGroupedIngredients] = useState<any>(null);

    useEffect(() => {
        if (ingredients && ingredients.length) {
            const grouped = groupBy(ingredients, x => x.type)
            setGroupedIngredients(grouped);
        }
    }, [ingredients]);

    const rootRef = useRef<HTMLElement>(null);
    const bunRef = useRef<HTMLHeadingElement>(null);
    const sauceRef = useRef<HTMLHeadingElement>(null);
    const mainRef = useRef<HTMLHeadingElement>(null);

    const handleScroll = () => {
        if (rootRef.current && bunRef.current && sauceRef.current && mainRef.current) {
            const bunDistance = Math.abs(rootRef?.current?.getBoundingClientRect()?.top - bunRef?.current?.getBoundingClientRect()?.top)
            const sauceDistance = Math.abs(rootRef?.current?.getBoundingClientRect()?.top - sauceRef.current?.getBoundingClientRect()?.top)
            const mainDistance = Math.abs(rootRef?.current?.getBoundingClientRect()?.top - mainRef.current?.getBoundingClientRect()?.top)
            const min = Math.min(bunDistance, sauceDistance, mainDistance)
            const activeTab = min === bunDistance ? 'bun' : min === sauceDistance ? 'sauces' : 'fillings'
            setSelectedTab(activeTab)
        }
    };

    useEffect(() => {
        if (selectedTab === 'bun') bunRef?.current?.scrollIntoView()
        if (selectedTab === 'sauces') sauceRef?.current?.scrollIntoView()
        if (selectedTab === 'fillings') mainRef?.current?.scrollIntoView()
    }, [selectedTab])

    return <>
        <section>
            <h1>Соберите Бургер</h1>
            <div className={cn('text', 'text_type_main-default', 'mb-10', styles.menu)}>
                <Tab value="bun" active={selectedTab === 'bun'} onClick={setSelectedTab}>
                    Булки
                </Tab>
                <Tab value="sauces" active={selectedTab === 'sauces'} onClick={setSelectedTab}>
                    Соусы
                </Tab>
                <Tab value="fillings" active={selectedTab === 'fillings'} onClick={setSelectedTab}>
                    Начинки
                </Tab>
            </div>
            {groupedIngredients && <section
                className={cn(styles.container)}
                ref={rootRef}
                onScroll={handleScroll}>
                <Ingredients
                    title='Булки'
                    ingredients={groupedIngredients.bun}
                    id='bun'
                    ref={bunRef}
                />
                <Ingredients
                    title='Соусы'
                    ingredients={groupedIngredients.sauce}
                    id='sauces'
                    ref={sauceRef}
                />
                <Ingredients
                    title='Начинки'
                    ingredients={groupedIngredients.main}
                    id='fillings'
                    ref={mainRef}
                />
            </section>}
        </section>
    </>
};
export default BurgerIngredients;