import React, { useState, useEffect, useRef } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Ingredients from '../ingredients/ingredients';
import cn from 'classnames';
import styles from './burger-ingredients.module.css';
import { Ingredient } from '../../model/ingredient'
import {Data} from '../../model/data'

const BurgerIngredients: React.FunctionComponent = () => {

    
    const filterArray = (arr: Array<Ingredient>) => {
        return arr.reduce(
            (acc: { [name: string]: Array<Ingredient> }, curr) => ({
                ...acc,
                [curr.type]: [...(acc[curr.type] || []), curr],
            }),
            {}
        );
    };


    const [selectedTab, setSelectedTab] = useState<string>('bread')
    const { bun, main, sauce } = filterArray(Data);
    const rootRef = useRef<HTMLElement>(null);
    const bunRef = useRef<HTMLHeadingElement>(null);
    const sauceRef = useRef<HTMLHeadingElement>(null);
    const mainRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {        
        document.querySelector(`#${selectedTab}`)?.scrollIntoView();
    }, [selectedTab]);

    const handleScroll = () => {      
        if (rootRef && bunRef && sauceRef && mainRef && rootRef.current && bunRef.current && sauceRef.current && mainRef.current) {
            const bunDistance = Math.abs(
                rootRef.current.getBoundingClientRect().top -
                bunRef.current.getBoundingClientRect().top
            );
            const sauceDistance = Math.abs(
                rootRef?.current.getBoundingClientRect().top -
                sauceRef?.current.getBoundingClientRect().top
            );
            const mainDistance = Math.abs(
                rootRef?.current.getBoundingClientRect().top -
                mainRef?.current.getBoundingClientRect().top
            );
            const minDistance = Math.min(bunDistance, sauceDistance, mainDistance);
            const currentHeader =
                minDistance === bunDistance
                    ? 'bread'
                    : minDistance === sauceDistance
                        ? 'sauces'
                        : 'fillings';
            setSelectedTab((prevState) => currentHeader === prevState ? prevState : currentHeader);
        }
    };

    return <>
        <section>
            <h1>Соберите Бургер</h1>
            <div className={cn('text', 'text_type_main-default', 'mb-10', styles.menu)}>
                <Tab value="bread" active={selectedTab === 'bread'} onClick={setSelectedTab}>
                    Булки
                </Tab>
                <Tab value="sauces" active={selectedTab === 'sauces'} onClick={setSelectedTab}>
                    Соусы
                </Tab>
                <Tab value="fillings" active={selectedTab === 'fillings'} onClick={setSelectedTab}>
                    Начинки
                </Tab>
            </div>
            <section
                className={cn(styles.container)}
                ref={rootRef}
                onScroll={handleScroll}>
                <Ingredients
                    title='Булки'
                    ingredients={bun}
                    id='bread'
                    ref={bunRef}
                />
                <Ingredients
                    title='Соусы'
                    ingredients={sauce}
                    id='sauces'
                    ref={sauceRef}
                />
                <Ingredients
                    title='Начинки'
                    ingredients={main}
                    id='fillings'
                    ref={mainRef}
                />
            </section>
        </section>
    </>
};
export default BurgerIngredients;