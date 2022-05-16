import { ordersReducer } from './orders';
import {
    GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED,
    GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS, GET_USER_ORDER_FAILED,
    CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED
} from '../constants/orders';


const initialState = {
    currentOrder: null,
    createOrder: null,
    orderRequest: false,
    orderFailed: false,
    orderLoaded: false,
    isLoading: false,
    hasError: false,
    loaded: false
};

describe('orders reducer', () => {

    it('should CREATE_ORDER_REQUEST', () => {
        expect(
            ordersReducer(initialState, {
                type: CREATE_ORDER_REQUEST
            })
        ).toEqual(expect.objectContaining({
            createOrder: null,
            orderRequest: true,
            orderFailed: false,
        }))
    })

    it('should CREATE_ORDER_SUCCESS', () => {
        expect(
            ordersReducer(initialState, {
                type: CREATE_ORDER_SUCCESS,
                order: {
                    name: "Space флюоресцентный бургер",
                    order: { number: 7777 },
                    success: true
                }
            })
        ).toEqual(expect.objectContaining({
            createOrder: {
                name: "Space флюоресцентный бургер",
                order: { number: 7777 },
                success: true
            },
            orderRequest: false,
            orderFailed: false,
        }))
    })

    it('should CREATE_ORDER_FAILED', () => {
        expect(
            ordersReducer(initialState, {
                type: CREATE_ORDER_FAILED
            })
        ).toEqual(expect.objectContaining({
            currentOrder: null,
            orderRequest: false,
            orderFailed: true,
        }))
    })

    it('should GET_ORDER_REQUEST', () => {
        expect(
            ordersReducer(initialState, {
                type: GET_ORDER_REQUEST
            })
        ).toEqual(expect.objectContaining({
            currentOrder: null,
            orderRequest: true,
            orderFailed: false,
            orderLoaded: false
        }))
    })

    it('should GET_ORDER_SUCCESS', () => {
    	expect(
    		ordersReducer(initialState, {
    			type: GET_ORDER_SUCCESS,
    			order: null
    		})
    	).toEqual(expect.objectContaining({
    		currentOrder: null,
    		orderRequest: false,
    		orderFailed: false,
    		orderLoaded: true
    	}))
    	expect(
    		ordersReducer(initialState, {
    			type: GET_ORDER_SUCCESS,
    			order: {
    				_id: "60da447273a639001a192d24",
    				owner: "60d72a588425d0001ba63f20",
    				status: "done",
    				number: 28,
    				name: "Флюоресцентный антарианский space бургер",
    				createdAt: "2021-06-28T21:51:46.040Z",
    				updatedAt: "2021-06-30T11:09:54.054Z",
    				__v: 0,
    			}
    		})
    	).toEqual(expect.objectContaining({
    		currentOrder: {
    			_id: "60da447273a639001a192d24",
    			owner: "60d72a588425d0001ba63f20",
    			status: "done",
    			number: 28,
    			name: "Флюоресцентный антарианский space бургер",
    			createdAt: "2021-06-28T21:51:46.040Z",
    			updatedAt: "2021-06-30T11:09:54.054Z",
    			__v: 0,
    		},
    		orderRequest: false,
    		orderFailed: false,
    		orderLoaded: true
    	}))
    })

    it('should GET_ORDER_FAILED', () => {
        expect(
            ordersReducer(initialState, {
                type: GET_ORDER_FAILED
            })
        ).toEqual(expect.objectContaining({
            currentOrder: null,
            orderRequest: false,
            orderFailed: true,
        }))
    })

    it('should GET_USER_ORDER_REQUEST', () => {
        expect(
            ordersReducer(initialState, {
                type: GET_USER_ORDER_REQUEST
            })
        ).toEqual(expect.objectContaining({
            currentOrder: null,
            orderRequest: true,
            orderFailed: false,
            orderLoaded: false
        }))
    })

    it('should GET_USER_ORDER_SUCCESS', () => {
    	expect(
    		ordersReducer(initialState, {
    			type: GET_USER_ORDER_SUCCESS,
    			order: null
    		})
    	).toEqual(expect.objectContaining({
    		currentOrder: null,
    		orderRequest: false,
    		orderFailed: false,
    		orderLoaded: true
    	}))
    	expect(
    		ordersReducer(initialState, {
    			type: GET_USER_ORDER_SUCCESS,
    			order: {
    				_id: "60da447273a639001a192d24",
    				owner: "60d72a588425d0001ba63f20",
    				status: "done",
    				number: 28,
    				name: "Флюоресцентный антарианский space бургер",
    				createdAt: "2021-06-28T21:51:46.040Z",
    				updatedAt: "2021-06-30T11:09:54.054Z",
    				__v: 0,
    			}
    		})
    	).toEqual(expect.objectContaining({
    		currentOrder: {
    			_id: "60da447273a639001a192d24",
    			owner: "60d72a588425d0001ba63f20",
    			status: "done",
    			number: 28,
    			name: "Флюоресцентный антарианский space бургер",
    			createdAt: "2021-06-28T21:51:46.040Z",
    			updatedAt: "2021-06-30T11:09:54.054Z",
    			__v: 0,
    		},
    		orderRequest: false,
    		orderFailed: false,
    		orderLoaded: true
    	}))
    })

    it('should handle GET_USER_ORDER_FAILED', () => {
    	expect(
    		ordersReducer(initialState, {
    			type: GET_USER_ORDER_FAILED
    		})
    	).toEqual(expect.objectContaining({
    		currentOrder: null,
    		orderRequest: false,
    		orderFailed: true,
    	}))
    })
})