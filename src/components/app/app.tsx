import React from 'react'
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BurgerUnion from '../burger-union/burger-union';
import OrdersFeed from '../orders-feed/orders-feed';
import UserProfile from '../user-profile/user-profile';

export const ROUTES = {
  HOME: '/',
  ORDERS: '/orders',
  PROFILE: '/profile'
}

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path={ROUTES.HOME} element={<BurgerUnion />} />
          <Route path={ROUTES.ORDERS} element={<OrdersFeed />} />
          <Route path={ROUTES.PROFILE} element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
