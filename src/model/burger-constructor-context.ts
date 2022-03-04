import { Ingredient } from './ingredient'

export interface IBurgerConstructorContext  {
    ingredients: Ingredient[];
    orderNumber: string;    
    getOrderNumber: () => void;      
  };