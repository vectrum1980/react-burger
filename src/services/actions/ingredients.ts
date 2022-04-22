import { Ingredient } from '../../model/ingredient'
import { IngredientWithUnicId } from '../../model/ingredient'
import {
  GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED,
  ADD_INGREDIENTS, DELETE_INGREDIENT,
  INCREASE_INGREDIENT, DECREASE_INGREDIENT, UPDATE_CONSTRUCTOR
} from '../constants/ingredietns';
import { api } from '../../api/api';


export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly items: Array<Ingredient>;
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IAddIngredientsAction {
  readonly type: typeof ADD_INGREDIENTS;
  readonly item: IngredientWithUnicId
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly id: string;
}

export interface IIncreaseIngredientAction {
  readonly type: typeof INCREASE_INGREDIENT;
  readonly key: string;
  readonly typeItem: string;
}

export interface IDecreaseIngredientAction {
  readonly type: typeof DECREASE_INGREDIENT;
  readonly key: string,
  readonly typeItem: string,
}

export interface IUpdateOrderAction {
  readonly type: typeof UPDATE_CONSTRUCTOR;
  readonly toIndex: number,
  readonly fromIndex: number,
}


export type TIngredientsActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IAddIngredientsAction
  | IDeleteIngredientAction
  | IIncreaseIngredientAction
  | IDecreaseIngredientAction
  | IUpdateOrderAction;
 
export function getIngredients() {
  return function (dispatch: any) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST,
    });
    api.ingredients.getIngredients()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            items: res.data,
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch(() =>
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        })
      );
  };
}











