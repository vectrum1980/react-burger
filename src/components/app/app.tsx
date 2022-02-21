import React, { useEffect, useState } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import AppHeader from '../app-header/app-header'
import BurgerUnion from '../burger-union/burger-union'
import { api } from '../../api/api'
import { Ingredient } from '../../model/ingredient';
import OrderDetails from '../order-details/order-details'

export const ROUTES = {
  HOME: '/',
  ORDERS: '/orders',
  PROFILE: '/profile',
  INGREDIENTS: '/ingredients',
  ORDER: '/order',
}


export const App = () => {

  const location = useLocation<any>();
  const background = location.state && location.state.background; 
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    api.ingredients.getIngredients().then(data => {
      const res: Ingredient[] = data;
      setIngredients(res);
    })
  }, []);


  return (
    <div>
      <AppHeader />
      <Switch location={background || location}>
        <Route path={'/'} exact>
          <BurgerUnion ingredients={ingredients} />
        </Route>
        <Route path='/ingredients/:id'>
          <Modal title='Детали ингредиента'><IngredientDetails  ingredients={ingredients}/></Modal>
        </Route>
        <Route path={`${ROUTES.ORDER}`}>
          <Modal title='Детали заказа'><OrderDetails/></Modal>
        </Route>
      </Switch>

      {background &&
        <>
          <Route path='/ingredients/:id' children={<Modal title='Детали ингредиента'><IngredientDetails  ingredients={ingredients}/></Modal>} />
          <Route path={`${ROUTES.ORDER}`} children={<Modal title='Детали заказа'><OrderDetails/></Modal>} />
        </>
      }
    </div>
  )
}

export default App
