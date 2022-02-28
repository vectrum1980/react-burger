import { BASE_URL } from '../constants/config'

const requestHandler = (resp: Response) => {
    if (resp.ok)
        return resp.json()
    if (resp.json)
        return resp.json().then((err: string) => Promise.reject(err))
    return Promise.reject(resp)
}

export const api = {
    ingredients: {
        getIngredients: async () => {
            const res = await fetch(`${BASE_URL}/ingredients`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            return requestHandler(res)
        }
    },
    orders: {
        getOrderNumber: async (ingredients: Array<string>) => {
            const resp = await fetch(`${BASE_URL}/orders`, {
                method: "POST",
                body: JSON.stringify({ ingredients: ingredients }),
                headers: { 'Content-Type': 'application/json' }
            })
            return requestHandler(resp)
        }
    }
}

