import React from 'react'
import './App.css';
import AppHeader from './components/app-header/app-header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import OrdersFeed from './components/orders-feed/orders-feed';
import UserProfile from './components/user-profile/user-profile';

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
        <main>
          <Routes>
            <Route path={ROUTES.HOME} element={<BurgerIngredients />} />
            <Route path={ROUTES.ORDERS} element={<OrdersFeed />} />
            <Route path={ROUTES.PROFILE} element={<UserProfile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
