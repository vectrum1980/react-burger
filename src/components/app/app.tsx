import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import AppHeader from '../app-header/app-header'
import BurgerUnion from '../burger-union/burger-union'
import OrderDetails from '../order-details/order-details'
import { Location } from '../../model/location'
import { useDispatch } from '../../hooks/useDispatch';
import { getIngredients } from '../../services/actions/ingredients';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import Profile from '../../pages/profile/profile'
import ProtectedRoute from '../route/protected-route'
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password'
import Logout from '../../pages/logout/logout'
import Feed from '../../pages/feed/feed'
import Order from '../../pages/order/order'


export const ROUTES = {
  HOME: '/',
  ORDERS: '/feed',
  PROFILE: '/profile',
  INGREDIENTS: '/ingredients',
  ORDER: '/order',
}

export const App = () => {

  const location = useLocation<Location>();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);


  return (
    <div>
      <AppHeader />
      <Switch location={background || location}>
        <Route path='/' exact>
          <BurgerUnion />
        </Route>
        <Route path='/login' exact={true}>
          <Login />
        </Route>
        <Route path='/register' exact={true}>
          <Register />
        </Route>
        <Route path='/feed' exact={true}>
          <Feed />
        </Route>
        <Route path='/feed/:id'>
          <Order />
        </Route>
        <ProtectedRoute path='/profile/orders/:id' exact={true}>
          <Order />
        </ProtectedRoute>
        <Route path='/ingredients/:id'>
          <IngredientDetails />
        </Route>
        <ProtectedRoute path={`${ROUTES.ORDER}`}>
          <Modal><OrderDetails /></Modal>
        </ProtectedRoute>
        <ProtectedRoute path='/profile'>
          <Profile />
        </ProtectedRoute>
        <Route path='/forgot-password' exact={true}>
          <ForgotPassword />
        </Route>
        <Route path='/reset-password' exact={true}>
          <ResetPassword />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route>
          <h1>404 NOT FOUND</h1>
        </Route>
      </Switch>

      {background &&
        <>
          <Route path='/' exact={true} children={<Modal><OrderDetails /></Modal>} />
          <Route path='/ingredients/:id' children={<Modal><IngredientDetails /></Modal>} />
          <ProtectedRoute path='/profile/orders/:id' children={<Modal><Order /></Modal>} />
          <Route path='/feed/:id' children={<Modal><Order /></Modal>} />
        </>
      }
    </div>
  )
}

export default App
