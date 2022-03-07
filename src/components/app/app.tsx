import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import AppHeader from '../app-header/app-header'
import BurgerUnion from '../burger-union/burger-union'
import OrderDetails from '../order-details/order-details'
import { Location } from '../../model/location'
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

export const ROUTES = {
  HOME: '/',
  ORDERS: '/orders',
  PROFILE: '/profile',
  INGREDIENTS: '/ingredients',
  ORDER: '/order',
}

export const App = () => {

  const location = useLocation<Location>();
  const background = location.state && location.state.background;
  //const { ingredients } = useContext(BurgerConstructorContext) as IBurgerConstructorContext;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);



  return (
    <div>
      <AppHeader />
      <Switch location={background || location}>
        <Route path={'/'} exact>
          <BurgerUnion />
        </Route>
        <Route path='/ingredients/:id'>
          <Modal title='Детали ингредиента'><IngredientDetails /></Modal>
        </Route>
        <Route path={`${ROUTES.ORDER}`}>
          <Modal><OrderDetails /></Modal>
        </Route>
      </Switch>

      {background &&
        <>
          <Route path='/ingredients/:id'>
            <Modal title='Детали ингредиента'><IngredientDetails  /></Modal>
          </Route>
          <Route path={`${ROUTES.ORDER}`}>
            <Modal><OrderDetails /></Modal>
          </Route>
        </>
      }
    </div>
  )
}

export default App
