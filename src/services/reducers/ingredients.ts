import {
  GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED,
  ADD_INGREDIENTS, DELETE_INGREDIENT, INCREASE_INGREDIENT, DECREASE_INGREDIENT, UPDATE_CONSTRUCTOR,
  GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED
} from '../constants/ingredietns';
import { TIngredientsActions } from '../actions/ingredients';
import { IngredientWithUnicId, IngredientsState } from '../../model/ingredient'

const initialState: IngredientsState = {  
  ingredients: [],
  burgerIngredients: {
    bun: null,
    ingredients: [],
    counts: {},
  },
  currentOrder: null,
  orderRequest: false,
  orderFailed: false,
  orderLoaded: false,
  isLoading: false,
  hasError: false,
  loaded: false
};

export const ingredientsReducer = (state = initialState, action: TIngredientsActions): IngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        hasError: false,
        ingredients: action.items,
        isLoading: false,
        loaded: true,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, hasError: true, isLoading: false };
    }
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
    case ADD_INGREDIENTS: {
      const { type } = action.item;
      if (type === 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            bun: action.item,
          },
        };
      }
      return {
        ...state,
        burgerIngredients: {
          ...state.burgerIngredients,
          ingredients: [
            ...state.burgerIngredients.ingredients,
            action.item,
          ],
        },
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        burgerIngredients: {
          ...state.burgerIngredients,
          ingredients: [
            ...state.burgerIngredients.ingredients,
          ].filter((el: IngredientWithUnicId) => el.unicId !== action.id),
        },
      };
    }
    case INCREASE_INGREDIENT: {
      const { typeItem } = action;
      if (typeItem !== 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            counts: {
              ...state.burgerIngredients.counts,
              [action.key]:
                (state.burgerIngredients.counts[action.key] || 0) + 1,
            },
          },
        };
      } else return state;
    }
    case DECREASE_INGREDIENT: {
      const { typeItem } = action;
      if (typeItem !== 'bun') {
        return {
          ...state,
          burgerIngredients: {
            ...state.burgerIngredients,
            counts: {
              ...state.burgerIngredients.counts,
              [action.key]: state.burgerIngredients.counts[action.key] - 1,
            },
          },
        };
      } else return state;
    }
    case UPDATE_CONSTRUCTOR: {
      const ingredients = [...state.burgerIngredients.ingredients];
      ingredients.splice(
        action.toIndex,
        0,
        ingredients.splice(action.fromIndex, 1)[0]
      );
      return {
        ...state,
        burgerIngredients: {
          ...state.burgerIngredients,
          ingredients: ingredients,
        },
      };
    }
    default: {
      return state;
    }
  }
};
