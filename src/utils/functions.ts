
import { Order } from '../model/order';
import {Ingredient, IngredientWithUnicId } from '../model/ingredient';


export const filterArray = (arr: Array<Ingredient>) => {
  return arr.reduce(
    (acc: { [name: string]: Array<Ingredient> }, curr) => ({
      ...acc,
      [curr.type]: [...(acc[curr.type] || []), curr],
    }),
    {}
  );
};

export const calculationCost = (bun: IngredientWithUnicId | null, arrOtherIngredients: Array<IngredientWithUnicId>) => {
  const bunPrice = bun ? bun.price : 0;
  return (
    bunPrice * 2 +
    arrOtherIngredients.reduce((acc, curr) => (acc += curr.price), 0)
  );
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
      '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const getDaysDesc = (days: number) => (
  days === 0 ? 'Сегодня'
    : days === 1 ? 'Вчера'
      : days > 1 ? `${days} дня(-ей) назад`
        : 'Что-то пошло не так:(');


export const convertDate = (date: string) => {
  const created: Date = new Date(date);
  const today: Date = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime: number = Math.ceil((today.getTime() - created.getTime()) / (60 * 60 * 24 * 1000));
  const hours = created.getHours() > 9 ? created.getHours() : `0${created.getHours()}`
  const min = created.getMinutes() > 9 ? created.getMinutes() : `0${created.getMinutes()}`
  return `${getDaysDesc(diffTime)}, ${hours}:${min}`;
};

export const filterOrdersByStatus = (arr: Array<Order>) => {
  return arr?.reduce((acc: { [name: string]: Array<Order> }, curr) => {
    curr.status === 'done' ? acc['done'] = [...acc['done'], curr] : acc['pending'] = [...acc['pending'], curr]
    return acc;
  }, { done: [], pending: [] })
}

export const getStatus = (status: string) => {
  return status === 'done'
    ? { text: 'Выполнен', textColor: 'green' }
    : status === 'pending'
      ? { text: 'Отменен', textColor: 'yellow' }
      : { text: 'Готовится', textColor: 'white' };
}
export const filterOrders = (arr: Array<Order>, id: string) => {
  return arr?.filter((el: Order) => el.number === Number(id))[0]
}

export const getPrice = (arr: Array<Ingredient>) => arr?.reduce((acc: number, curr: Ingredient) => acc += curr.price, 0)

export const getBurgerIngredients = (arrIdBurgerIngredients: Array<string>, arrAllIngredients: Array<Ingredient>) => (
  arrIdBurgerIngredients?.map((id: string) => (
    arrAllIngredients.filter((item: Ingredient) => item._id === id))))?.flat()

interface BurgerIngredientsWithCount {
  item: { [name: string]: Ingredient }, count: { [name: string]: number }
}

export const getBurgerIngredientsObjWithCount = (arr: Array<Ingredient>) => arr?.reduce((acc: BurgerIngredientsWithCount, curr: Ingredient) => {
  const id = curr._id
  acc.item[id] = curr;
  acc.count[id] = (acc.count[id] || 0) + 1
  return acc
}
  , { item: {}, count: {} })
