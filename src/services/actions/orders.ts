import { Order } from '../../model/order'
import {  GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, CLEAR_ORDER_NUMBER } from '../constants/orders';

import { api } from '../../api/api';

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

export type TOrdersActions =
  | IGetOrderOrderRequestAction
  | IGetOrderOrderSuccessAction
  | IClearOrderNumberAction
  | IGetOrderOrderFailedAction;

export function getOrder(ingredientsId: Array<string>) {
  return function (dispatch: any) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    api.orders.getOrderNumber(ingredientsId)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res,
          });
        } else {
          dispatch({
            type: GET_ORDER_FAILED,
          });
        }
      })
      .catch(() =>
        dispatch({
          type: GET_ORDER_FAILED,
        })
      );
  };
}