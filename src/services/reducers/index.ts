import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { ordersReducer } from './orders';
import { authReducer } from './auth';
import { wsReducer } from './ws';
import { wsReducerAuth } from './ws-auth';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: ordersReducer,
  auth: authReducer,
  ws: wsReducer,
  wsAuth: wsReducerAuth 
});
