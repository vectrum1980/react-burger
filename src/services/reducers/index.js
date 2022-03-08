import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { ordersReducer } from './orders';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: ordersReducer
});
