import { Order, OrderInfo } from '../../model/order'
import {  GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, CLEAR_ORDER_NUMBER, CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS, GET_USER_ORDER_FAILED } from '../constants/orders';
import { api } from '../../api/api';
import { AppDispatch, AppThunk } from '../../types';

export interface IGetOrderOrderRequestAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly order: Order;
}

export interface IGetOrderOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IClearOrderNumberAction {
    readonly type: typeof CLEAR_ORDER_NUMBER;
  }

  export interface IGetOrderOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST;
  }
  
  export interface IGetOrderOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS;
    readonly order: Order;
  }
  
  export interface IGetOrderOrderFailedAction {
    readonly type: typeof GET_ORDER_FAILED;
  }
  
  export interface IGetUserOrderOrderRequestAction {
    readonly type: typeof GET_USER_ORDER_REQUEST;
  }
  
  export interface IGetUserOrderOrderSuccessAction {
    readonly type: typeof GET_USER_ORDER_SUCCESS;
    readonly order: Order;
  }
  
  export interface IGetUserOrderOrderFailedAction {
    readonly type: typeof GET_USER_ORDER_FAILED;
  }

  export interface ICreateOrderRequestAction {
    readonly type: typeof CREATE_ORDER_REQUEST;
  }
  
  export interface ICreateOrderSuccessAction {
    readonly type: typeof CREATE_ORDER_SUCCESS;
    readonly order: OrderInfo;
  }
  
  export interface ICreateOrderFailedAction {
    readonly type: typeof CREATE_ORDER_FAILED;
  }
  

export type TOrdersActions =
  | IGetOrderOrderRequestAction
  | IGetOrderOrderSuccessAction
  | IClearOrderNumberAction
  | IGetOrderOrderFailedAction
  | IGetOrderOrderRequestAction
  | IGetOrderOrderSuccessAction
  | IGetOrderOrderFailedAction
  | IGetUserOrderOrderRequestAction
  | IGetUserOrderOrderSuccessAction
  | IGetUserOrderOrderFailedAction
  | ICreateOrderRequestAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailedAction;


  export const getOrder: AppThunk = (id: string) => {
    return function (dispatch: AppDispatch) {
      dispatch({
        type: GET_ORDER_REQUEST,
      });
      api.orders.getOrderRequest(id)
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: GET_ORDER_SUCCESS,
              order: res.orders[0],
            });
          } else {
            dispatch({
              type: GET_ORDER_FAILED,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: GET_ORDER_FAILED,
          });
        });
    };
  };
  
  export const getUserOrder: AppThunk = (id: string) => {
    return function (dispatch: AppDispatch) {
      dispatch({
        type: GET_USER_ORDER_REQUEST,
      });
      api.orders.getUserOrderRequest(id)
        .then((res) => {
          if (res && res.success) {
            dispatch({
              type: GET_USER_ORDER_SUCCESS,
              order: res.orders[0],
            });
          } else {
            dispatch({
              type: GET_USER_ORDER_FAILED,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: GET_ORDER_FAILED,
          });
        });
    };
  };
  
  export const createOrder: AppThunk = (ingredientsId: Array<string>) => {
    return function (dispatch: AppDispatch) {
      dispatch({
        type: CREATE_ORDER_REQUEST,
      });    
      api.orders.addOrdersRequest(ingredientsId)      
        .then((res) => {                
          if (res && res.success) {
            dispatch({
              type: CREATE_ORDER_SUCCESS,
              order: res,
            });
          } else {
            dispatch({
              type: CREATE_ORDER_FAILED,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: CREATE_ORDER_FAILED,
          });
        });
    };
  };
