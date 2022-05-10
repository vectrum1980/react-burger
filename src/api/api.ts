import { BASE_URL } from '../constants/config'
import { User } from '../model/user'
import { getCookie } from '../utils/auth';

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
        addOrdersRequest: async (ingredients: Array<string>) => {           
            const resp = await fetch(`${BASE_URL}/orders`, {
                method: "POST",
                body: JSON.stringify({ ingredients: ingredients }),
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + getCookie('token') }
            })           
            return requestHandler(resp)
        },
        getOrderNumber: async (ingredients: Array<string>) => {           
            const resp = await fetch(`${BASE_URL}/orders`, {
                method: "POST",
                body: JSON.stringify({ ingredients: ingredients }),
                headers: { 'Content-Type': 'application/json' }
            })
            return requestHandler(resp)
        },
        getOrderRequest: async (number: string) => {
            const resp = await fetch(`${BASE_URL}/orders/${number}`, {
                method: "GET",               
                headers: { 'Content-Type': 'application/json' }
            })
            return requestHandler(resp)
        },
        getUserOrderRequest: async (number: string) => {
            const resp = await fetch(`${BASE_URL}/orders/${number}`, {
                method: "GET",               
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + getCookie('token')
                }
            })
            return requestHandler(resp)
        },
    },
    auth: {
        register: async (user: User) => {
            const resp = await fetch(`${BASE_URL}/auth/register`, {
                method: "POST",
                cache: 'no-cache',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            })
            return requestHandler(resp)
        },
        signIn: async (user: User) => {
            const resp = await fetch(`${BASE_URL}/auth/login`, {
                method: "POST",
                cache: 'no-cache',
                body: JSON.stringify({ email: user.email, password: user.password }),
                headers: { 'Content-Type': 'application/json' }
            })
            return requestHandler(resp)
        },
        getUser: async () => {
            const resp = await fetch(`${BASE_URL}/auth/user`, {
                method: 'GET',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + getCookie('token')
                }
            })
            return requestHandler(resp)
        },
        logout: async () => {
            const resp = await fetch(`${BASE_URL}/auth/logout`, {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return requestHandler(resp)
        },
        updateUser: async (user: User) => {
            const resp = await fetch(`${BASE_URL}/auth/user`, {
                method: 'PATCH',
                cache: 'no-cache',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + getCookie('token')
                }
            })
            return requestHandler(resp)
        },
        refreshToken: async () => {
            const resp = await fetch(`${BASE_URL}/auth/token`, {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify({ token: localStorage.getItem('refreshToken') }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return requestHandler(resp)
        },
        resetPassword: async (password: string, token: string) => {
            const resp = await fetch(`${BASE_URL}/password-reset/reset`, {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify({ password, token }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return requestHandler(resp)
        },
        forgotPassword: async (email: string) => {
            const resp = await fetch(`${BASE_URL}/password-reset`, {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return requestHandler(resp)
        }
    }
}

