import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, CLEAR_ORDER_NUMBER, CREATE_ORDER_REQUEST, GET_USER_ORDER_REQUEST,
    GET_USER_ORDER_SUCCESS, GET_USER_ORDER_FAILED,
    CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED } from '../constants/orders';
import { TOrdersActions } from '../actions/orders';
import { OrdersState } from '../../model/order'

const initialState: OrdersState = {
    currentOrder: null,
    createOrder: null,
    orderRequest: false,
    orderFailed: false,
    orderLoaded: false,
    isLoading: false,
    hasError: false,
    loaded: false
};

export const ordersReducer = (state = initialState, action: TOrdersActions): OrdersState => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false,
                orderLoaded: false
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderFailed: false,
                currentOrder: action.order,
                orderRequest: false,
                orderLoaded: true
            };
        }
        case GET_ORDER_FAILED: {
            return { ...state, orderFailed: true, orderRequest: false };
        }
        case GET_USER_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false,
                orderLoaded: false
            };
        }
        case GET_USER_ORDER_SUCCESS: {
            return {
                ...state,
                orderFailed: false,
                currentOrder: action.order,
                orderRequest: false,
                orderLoaded: true
            };
        }
        case GET_USER_ORDER_FAILED: {
            return { ...state, orderFailed: true, orderRequest: false };
        }

        case CLEAR_ORDER_NUMBER: {
            return { ...state, createOrder: null };
        }
        case CREATE_ORDER_REQUEST: {
            return {
              ...state,
              orderRequest: true,
              orderFailed: false,
            };
          }
          case CREATE_ORDER_SUCCESS: {
            return {
              ...state,
              orderFailed: false,
              createOrder: action.order,
              orderRequest: false,             
            };
          }
          case CREATE_ORDER_FAILED: {
            return { ...state, orderFailed: true, orderRequest: false };
          }

        default: {
            return state;
        }
    }
};
