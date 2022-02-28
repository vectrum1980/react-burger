import { Ingredient } from '../model/ingredient'
import { getRequest, postRequest } from '../utils/api'
import { BaseUrl } from '../constants/config'

export const api = {
    ingredients: {
        getIngredients: (): Promise<Ingredient[]> =>
        (getRequest<Ingredient[]>({
            endpoint: `${BaseUrl}/ingredients`,
        })),
    },
    orders: {  
        getOrderNumber: (ingredients: Array<string>) => {
            return fetch(`${BaseUrl}/orders`, {
                method: "POST",
                body: JSON.stringify({ ingredients: ingredients }),
                headers: { 'Content-Type': 'application/json' }
            }).then(async response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }                     
                return await response.json(); ;
            })
        }
    },
}