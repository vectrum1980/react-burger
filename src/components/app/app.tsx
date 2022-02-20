import React, {useEffect } from 'react'
import { Switch, BrowserRouter, Route, Redirect, useLocation, useHistory } from 'react-router-dom'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'

import AppHeader from '../app-header/app-header'
import BurgerUnion from '../burger-union/burger-union'

export const ROUTES = {
  HOME: '/',
  ORDERS: '/orders',
  PROFILE: '/profile',
  INGREDIENTS: '/ingredients',
}


export const App = () => {
  
  const location = useLocation<any>();
  const background = location.state && location.state.background;

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
      </Switch>

      {background &&
        <>
          <Route path='/ingredients/:id' children={<Modal title='Детали ингредиента'><IngredientDetails /></Modal>} />
        </>
      }
    </div>
  )
}

export default App
