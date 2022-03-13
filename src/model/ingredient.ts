export interface Ingredient {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v?: number | undefined | null;
}

export interface IngredientRef {
    title: string,
    ingredients: Array<Ingredient>,
    id: string
}

export interface IngredientsGroup {
    type: string,
    ingredients: Array<Ingredient>
}

export interface IngredientWithUnicId {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v?: number | undefined | null;
    unicId: string;
}

export interface IngredientsCount {
    [name: string]: number;
}

export interface BurgerIngredients {
    bun: null | IngredientWithUnicId;
    ingredients: Array<IngredientWithUnicId>;
    counts: IngredientsCount
}

export interface IngredientsState {
    isLoading: boolean;
    hasError: boolean;
    loaded: boolean;
    ingredients: Array<Ingredient>;
    burgerIngredients: BurgerIngredients;   
};

