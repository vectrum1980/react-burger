import React, { useEffect, useState, useMemo } from 'react'
import { Ingredient } from '../model/ingredient';
import { IBurgerConstructorContext } from '../model/burger-constructor-context'
import { api } from '../api/api'

export const BurgerConstructorContext = React.createContext<IBurgerConstructorContext | null>(null);

const BurgerConstructorProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [orderNumber, setOrderNumber] = useState<string>("");

    useEffect(() => {
        api.ingredients.getIngredients().then(data => {
            setIngredients(data);
        })
    }, []);

    const bun = useMemo(
        () =>
            ingredients.find((item) => {
                return item.type === 'bun';
            }),
        [ingredients]
    );

    const otherIngredients = useMemo(
        () => ingredients.filter((item) => item.type !== 'bun'),
        [ingredients]
    );

    const getOrderNumber = () => {

        const ids = otherIngredients
            .map((item) => {
                return item._id;
            })
            .concat(bun ? bun._id : '');

        api.orders.getOrderNumber(ids).then(({ order }) => {
            setOrderNumber(order.number);
        })
            .catch((err) => console.log(`${err}`));
    }

    return (
        <BurgerConstructorContext.Provider value={{ ingredients, orderNumber, getOrderNumber }}>
            {children}
        </BurgerConstructorContext.Provider>
    );
};

export default BurgerConstructorProvider;