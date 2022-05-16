import { ingredientsReducer } from './ingredients';
import { testData } from '../../utils/testData';
import {
	GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, 
	ADD_INGREDIENTS, INCREASE_INGREDIENT, DECREASE_INGREDIENT, DELETE_INGREDIENT, UPDATE_CONSTRUCTOR

} from '../constants/ingredietns';

const initialState = {
	ingredients: [],
	burgerIngredients: {
		bun: null,
		ingredients: [],
		counts: {},
	},
	isLoading: false,
	hasError: false,
	loaded: false
};

describe('ingredients reducer', () => {

	it('should return initial state', () => {
		expect(ingredientsReducer(undefined, {})).toEqual(initialState)
	})

	it('should process GET_INGREDIENTS_REQUEST', () => {
		expect(
			ingredientsReducer(initialState, {
				type: GET_INGREDIENTS_REQUEST
			})
		).toEqual(expect.objectContaining({
			ingredients: [],
			burgerIngredients: {
				bun: null,
				ingredients: [],
				counts: {},
			},
			isLoading: true,
			hasError: false,
			loaded: false
		}))
	})

	it('should process GET_INGREDIENTS_SUCCESS', () => {
		expect(
			ingredientsReducer(initialState, {
				type: GET_INGREDIENTS_SUCCESS,
				items: testData
			})
		).toEqual(expect.objectContaining({
			ingredients: testData,
			burgerIngredients: {
				bun: null,
				ingredients: [],
				counts: {},
			},
			isLoading: false,
			hasError: false,
			loaded: true,
		}))
	})

	it('should process GET_INGREDIENTS_FAILED', () => {
		expect(
			ingredientsReducer(initialState, {
				type: GET_INGREDIENTS_FAILED,
			})
		).toEqual(expect.objectContaining({
			ingredients: [],
			burgerIngredients: {
				bun: null,
				ingredients: [],
				counts: {},
			},
			isLoading: false,
			hasError: true,
			loaded: false
		}))
	})

	it('should ADD_INGREDIENTS', () => {

		const stateWithBun = {
			isLoading: false,
			hasError: false,
			loaded: false,
			ingredients: [],
			burgerIngredients: {
				bun: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				},
				counts: {}
			}
		}

		const stateWithOtherIngredients = {
			isLoading: false,
			hasError: false,
			loaded: false,
			ingredients: [],
			burgerIngredients: {
				bun: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				},
				ingredients: [
					{
						calories: 643,
						carbohydrates: 85,
						fat: 26,
						image: "https://code.s3.yandex.net/react/code/meat-03.png",
						image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
						name: "Филе Люминесцентного тетраодонтимформа",
						price: 988,
						proteins: 44,
						type: "main",
						_id: "60cb6564fce49c00269d4019"
					},
					{
						calories: 420,
						carbohydrates: 33,
						fat: 244,
						image: "https://code.s3.yandex.net/react/code/meat-02.png",
						image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
						name: "Мясо бессмертных моллюсков Protostomia",
						price: 1337,
						proteins: 433,
						type: "main",
						_id: "60cb6564fce49c00269d401a"
					},
					{
						calories: 99,
						carbohydrates: 42,
						fat: 24,
						image: "https://code.s3.yandex.net/react/code/sauce-03.png",
						image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
						name: "Соус традиционный галактический",
						price: 15,
						proteins: 42,
						type: "sauce",
						_id: "60cb6564fce49c00269d401f"
					},
				],
				counts: {}
			}
		}
		expect(
			ingredientsReducer(initialState, {
				type: ADD_INGREDIENTS,
				item: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				}
			})
		).toEqual(expect.objectContaining({
			burgerIngredients: {
				bun: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				},
				ingredients: [],
				counts: {},
			},
		}))
		expect(
			ingredientsReducer(initialState, {
				type: ADD_INGREDIENTS,
				item: {
					calories: 14,
					carbohydrates: 11,
					fat: 22,
					image: "https://code.s3.yandex.net/react/code/sauce-04.png",
					image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
					name: "Соус фирменный Space Sauce",
					price: 80,
					proteins: 50,
					type: "sauce",
					_id: "60cb6564fce49c00269d401e",
					productId: '123456789'
				}
			})
		).toEqual(expect.objectContaining({
			burgerIngredients: {
				bun: null,
				ingredients: [{
					calories: 14,
					carbohydrates: 11,
					fat: 22,
					image: "https://code.s3.yandex.net/react/code/sauce-04.png",
					image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
					name: "Соус фирменный Space Sauce",
					price: 80,
					proteins: 50,
					type: "sauce",
					_id: "60cb6564fce49c00269d401e",
					productId: '123456789'
				}],
				counts: {},
			},
		}))
		expect(
			ingredientsReducer(stateWithBun, {
				type: ADD_INGREDIENTS,
				item: {
					calories: 420,
					carbohydrates: 53,
					fat: 24,
					image: "https://code.s3.yandex.net/react/code/bun-02.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
					name: "Краторная булка N-200i",
					price: 1255,
					proteins: 80,
					type: "bun",
					_id: "60cb6564fce49c00269d4017"
				}
			})
		).toEqual(expect.objectContaining({
			burgerIngredients: {
				bun: {
					calories: 420,
					carbohydrates: 53,
					fat: 24,
					image: "https://code.s3.yandex.net/react/code/bun-02.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
					name: "Краторная булка N-200i",
					price: 1255,
					proteins: 80,
					type: "bun",
					_id: "60cb6564fce49c00269d4017"
				},
				counts: {},
			},
			hasError: false,
			ingredients: [],
			isLoading: false,
			loaded: false
		}))
		expect(
			ingredientsReducer(stateWithOtherIngredients, {
				type: ADD_INGREDIENTS,
				item: {
					calories: 100,
					carbohydrates: 100,
					fat: 99,
					image: "https://code.s3.yandex.net/react/code/sauce-01.png",
					image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
					name: "Соус с шипами Антарианского плоскоходца",
					price: 88,
					proteins: 101,
					type: "sauce",
					_id: "60cb6564fce49c00269d4020"
				}
			}).burgerIngredients.ingredients.length
		).toBe(4)
	})

	it('should DELETE_INGREDIENT', () => {

		const state = {
			isLoading: false,
			hasError: false,
			loaded: false,
			ingredients: [],
			burgerIngredients: {
				bun: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				},
				ingredients: [
					{
						calories: 643,
						carbohydrates: 85,
						fat: 26,
						image: "https://code.s3.yandex.net/react/code/meat-03.png",
						image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
						name: "Филе Люминесцентного тетраодонтимформа",
						price: 988,
						proteins: 44,
						type: "main",
						_id: "60cb6564fce49c00269d4019",
						productId: 1,
						unicId: 1
					},
					{
						calories: 420,
						carbohydrates: 33,
						fat: 244,
						image: "https://code.s3.yandex.net/react/code/meat-02.png",
						image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
						name: "Мясо бессмертных моллюсков Protostomia",
						price: 1337,
						proteins: 433,
						type: "main",
						_id: "60cb6564fce49c00269d401a",
						productId: 2,
						unicId: 2
					},
					{
						calories: 99,
						carbohydrates: 42,
						fat: 24,
						image: "https://code.s3.yandex.net/react/code/sauce-03.png",
						image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
						name: "Соус традиционный галактический",
						price: 15,
						proteins: 42,
						type: "sauce",
						_id: "60cb6564fce49c00269d401f",
						productId: 3,
						unicId: 3
					},
				],
				counts: {}
			}
		}
		expect(
			ingredientsReducer(state, {
				type: DELETE_INGREDIENT,
				id: 3
			})
		).toEqual(expect.objectContaining({
			burgerIngredients: {
				bun: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				},
				ingredients: [
					{
						calories: 643,
						carbohydrates: 85,
						fat: 26,
						image: "https://code.s3.yandex.net/react/code/meat-03.png",
						image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
						name: "Филе Люминесцентного тетраодонтимформа",
						price: 988,
						proteins: 44,
						type: "main",
						_id: "60cb6564fce49c00269d4019",
						productId: 1,
						unicId: 1
					},
					{
						calories: 420,
						carbohydrates: 33,
						fat: 244,
						image: "https://code.s3.yandex.net/react/code/meat-02.png",
						image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
						name: "Мясо бессмертных моллюсков Protostomia",
						price: 1337,
						proteins: 433,
						type: "main",
						_id: "60cb6564fce49c00269d401a",
						productId: 2,
						unicId: 2
					},
				],
				counts: {}
			},
		}))
		expect(
			ingredientsReducer(state, {
				type: DELETE_INGREDIENT,
				id: 3
			}).burgerIngredients.ingredients.length
		).toBe(2)
	})

	it('should UPDATE_CONSTRUCTOR', () => {
		const state = {
			ingredients: [],
			burgerIngredients: {
				bun: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					productId: "7b9ae11f-cb8c-4229-a21b-7ac2e4d061a5",
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				},
				ingredients: [
					{
						calories: 14,
						carbohydrates: 11,
						fat: 22,
						image: "https://code.s3.yandex.net/react/code/sauce-04.png",
						image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
						name: "Соус фирменный Space Sauce",
						price: 80,
						productId: "b3fdb2cc-da95-4093-94f9-a14420f7ea57",
						proteins: 50,
						type: "sauce",
						_id: "60cb6564fce49c00269d401e"
					},
					{
						calories: 30,
						carbohydrates: 40,
						fat: 20,
						image: "https://code.s3.yandex.net/react/code/sauce-02.png",
						image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
						name: "Соус Spicy-X",
						price: 90,
						productId: "cba024bb-2195-4982-93ba-5e873341f463",
						proteins: 30,
						type: "sauce",
						_id: "60cb6564fce49c00269d401d"
					}
				],
				counts: {}
			}			
		}
		expect(
			ingredientsReducer(state, {
				type: UPDATE_CONSTRUCTOR,
				toIndex: 0,
				fromIndex: 1,
			})
		).toEqual({
			ingredients: [],
			burgerIngredients: {
				bun: {
					calories: 643,
					carbohydrates: 85,
					fat: 26,
					image: "https://code.s3.yandex.net/react/code/bun-01.png",
					image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
					image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
					name: "Флюоресцентная булка R2-D3",
					price: 988,
					productId: "7b9ae11f-cb8c-4229-a21b-7ac2e4d061a5",
					proteins: 44,
					type: "bun",
					_id: "60cb6564fce49c00269d4018"
				},
				ingredients: [
					{
						calories: 30,
						carbohydrates: 40,
						fat: 20,
						image: "https://code.s3.yandex.net/react/code/sauce-02.png",
						image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
						name: "Соус Spicy-X",
						price: 90,
						productId: "cba024bb-2195-4982-93ba-5e873341f463",
						proteins: 30,
						type: "sauce",
						_id: "60cb6564fce49c00269d401d"
					},
					{
						calories: 14,
						carbohydrates: 11,
						fat: 22,
						image: "https://code.s3.yandex.net/react/code/sauce-04.png",
						image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
						image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
						name: "Соус фирменный Space Sauce",
						price: 80,
						productId: "b3fdb2cc-da95-4093-94f9-a14420f7ea57",
						proteins: 50,
						type: "sauce",
						_id: "60cb6564fce49c00269d401e"
					},
				],
				counts: {}
			}
		})
	})

	it('should INCREASE_INGREDIENT', () => {
		const state = {
			ingredients: [],
			burgerIngredients: {
				bun: null,
				ingredients: [],
				counts: {
					"60cb6564fce49c00269d401e": 3,
					"60cb6564fce49c00269d401d": 3,
					"60cb6564fce49c00269d4020": 2,
					"60cb6564fce49c00269d401f": 1,
					"60cb6564fce49c00269d4022": 1,
					"60cb6564fce49c00269d4021": 4,
				},
			},
		};

		expect(
			ingredientsReducer(state, {
				type: INCREASE_INGREDIENT,
				key: "60cb6564fce49c00269d401c",
				typeItem: "main",
			})
		).toEqual({
			ingredients: [],
			burgerIngredients: {
				bun: null,
				ingredients: [],
				counts: {
					"60cb6564fce49c00269d401e": 3,
					"60cb6564fce49c00269d401d": 3,
					"60cb6564fce49c00269d4020": 2,
					"60cb6564fce49c00269d401f": 1,
					"60cb6564fce49c00269d4022": 1,
					"60cb6564fce49c00269d4021": 4,
					"60cb6564fce49c00269d401c": 1
				},
			},
		})
		expect(
			ingredientsReducer(state, {
				type: INCREASE_INGREDIENT,
				key: "60cb6564fce49c00269d401c",
				typeItem: "bun",
			})
		).toEqual(state)
		expect(
			ingredientsReducer(state, {
				type: INCREASE_INGREDIENT,
				key: "60cb6564fce49c00269d401e",
				typeItem: "main",
			}).burgerIngredients.counts["60cb6564fce49c00269d401e"]
		).toBe(4)
	})

	it('should DECREASE_INGREDIENT', () => {
		const state = {
			ingredients: {},
			burgerIngredients: {
				bun: null,
				ingredients: [],
				counts: {
					"60cb6564fce49c00269d401e": 3,
					"60cb6564fce49c00269d401d": 3,
					"60cb6564fce49c00269d4020": 2,
					"60cb6564fce49c00269d401f": 1,
					"60cb6564fce49c00269d4022": 1,
					"60cb6564fce49c00269d4021": 4,
				},
			},
		};

		expect(
			ingredientsReducer(state, {
				type: DECREASE_INGREDIENT,
				key: "60cb6564fce49c00269d401e",
				typeItem: "bun",
			})
		).toEqual(state)
		expect(
			ingredientsReducer(state, {
				type: DECREASE_INGREDIENT,
				key: "60cb6564fce49c00269d401e",
				typeItem: "sauce",
			}).burgerIngredients.counts["60cb6564fce49c00269d401e"]
		).toBe(2)
	})

})