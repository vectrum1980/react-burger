import React, { useState, SyntheticEvent } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { Input, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { login } from '../../services/actions/auth';
import styles from './login.module.css';
import { useDispatch } from '../../hooks/useDispatch';
import { Link } from 'react-router-dom';
import { useSelector } from '../../hooks/useSelector';

const Login: React.FunctionComponent = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { state: { from = '/' } = {} } = useLocation() as {
    state: { from?: string };
  };

  const userName = useSelector((store) => store.auth.name)

  const dispatch = useDispatch();

  const handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(data));
  };

  const hasToken = localStorage.getItem('refreshToken')

  if (userName || hasToken) {
    return (
      <Redirect to={from} />
    );
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submit} className={cn(styles.form, 'mb-20')}>
        <h1 className={cn(styles.title, 'text text_type_main-medium')}>Вход</h1>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={handleInputChange}
          value={data.email}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
        <PasswordInput
          value={data.password}
          name={'password'}
          onChange={handleInputChange}
        />
        <Button type='primary' size='medium'>
          Войти
        </Button>
      </form>
      <div className={cn('mb-4')}>
        <span className={'text text_type_main-default text_color_inactive'}>
          Вы - новый пользователь?
        </span>
        <Link
          to='/register'
          className={cn('text text_type_main-default', styles.link, 'pl-2')}
        >
          Зарегистрироваться
        </Link>
      </div>
      <div>
        <span className={'text text_type_main-default text_color_inactive'}>
          Забыли пароль?
        </span>
        <Link
          to='/forgot-password'
          className={cn('text text_type_main-default', styles.link, 'pl-2')}
        >
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
}

export default Login;
