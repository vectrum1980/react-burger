import React, { useEffect, useState } from 'react'
import { Ingredient } from '../model/ingredient';
import { IBurgerConstructorContext } from '../model/burger-constructor-context'
import { api } from '../api/api'

export const BurgerConstructorContext = React.createContext<IBurgerConstructorContext | null>(null);

const BurgerConstructorProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [orderNumber, setOrderNumber] = useState<string>("");

    useEffect(() => {
        api.ingredients.getIngredients().then(data => {
            setIngredients(data.data);
        }).catch((err) => console.log(`${err}`));
    }, []);

    const getOrderNumber = () => {
        const ids = ingredients.map((item) => { return item._id; });
        api.orders.getOrderNumber(ids).then(({ order }) => {
            setOrderNumber(order.number);
        }).catch((err) => console.log(`${err}`));
    }

    return (
        <BurgerConstructorContext.Provider value={{ ingredients, orderNumber, getOrderNumber }}>
            {children}
        </BurgerConstructorContext.Provider>
    );
};

export default BurgerConstructorProvider;