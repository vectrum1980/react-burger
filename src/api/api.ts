import { Ingredient } from '../model/ingredient'
import { getRequest } from '../utils/api'
import { BaseUrl } from '../constants/config'

export const api = {
    ingredients: {
        getIngredients: (): Promise<Ingredient[]> =>
        (getRequest<Ingredient[]>({
            endpoint: `${BaseUrl}/ingredients`,
        })),
    }
}