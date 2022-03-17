import React, { useState, SyntheticEvent } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Redirect } from 'react-router-dom';
import { forgotPassword } from '../../services/actions/auth';
import { useDispatch } from '../../hooks/useDispatch';
import styles from './forgot-password.module.css';
import { useSelector } from '../../hooks/useSelector';

const ForgotPassword: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const hasToken = localStorage.getItem('refreshToken');
  const dispatch = useDispatch();
  const isforgotPasswordSuccess = useSelector((store) => store.auth.isforgotPasswordSuccess)

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(forgotPassword(value))
  };

  if (hasToken) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  }
  
  if (isforgotPasswordSuccess) {
    return (
      <Redirect
        to={{
          pathname: '/reset-password'
        }}
      />
    );
  }


  return (
    <div className={styles.container}>
      <form onSubmit={submit} className={cn(styles.form, 'mb-20')}>
        <h1 className={cn(styles.title, 'text text_type_main-medium')}>
          Восстановление пароля
        </h1>
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={'email'}
          error={false}
          errorText={'Что-то пошло не так'}
          size={'default'}
        />
        <Button type='primary' size='medium'>
          Восстановить
        </Button>
      </form>
      <div className={cn('mb-4')}>
        <span className={'text text_type_main-default text_color_inactive'}>
          Вспомнили пароль?
        </span>
        <Link
          to='/login'
          className={cn('text text_type_main-default', styles.link, 'pl-2')}
        >
          Войти
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
