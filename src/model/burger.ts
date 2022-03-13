import { Ingredient } from './ingredient'

export interface Burger {
    item: Ingredient;
    index: number;
	deleteIngredient: () => void;
	moveItem: (
		dragIndex: number,
		hoverIndex: number)
		=> void;
}

export interface IDragItem  {
	index: number
	id: string
}