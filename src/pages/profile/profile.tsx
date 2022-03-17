import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from './profile.module.css';
import { Switch, Route } from 'react-router-dom';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';
import UserForm from '../../components/user-form/user-form';
import UserOrders from '../../components/user-orders/user-orders';
import { getUser } from '../../services/actions/auth';
import { useDispatch } from '../../hooks/useDispatch';

const Profile: React.FunctionComponent = () => {
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
 

  return (
    <div className={cn(styles.main, 'pt-10', 'pl-10', 'pr-10', 'mt-10')}>
      <ProfileNavigation />
      <Switch>
        <Route path='/profile' exact={true}>
          <UserForm />
        </Route>
        <Route path='/profile/orders' exact={true}>
          <UserOrders />
        </Route>
        <Route>
          <div className={styles.container}>
            <h1> 404 Здесь ничего нет</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
