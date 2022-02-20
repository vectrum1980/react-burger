import React from "react";
import { NavLink, Link, useRouteMatch } from 'react-router-dom'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import { ROUTES } from "../app/app";
import cn from 'classnames'


const AppHeader: React.FunctionComponent = () => {

    const isConstructor = !!useRouteMatch({ path: ROUTES.HOME, exact: true })
    const isOrders = !!useRouteMatch(ROUTES.ORDERS)
    const isProfile = !!useRouteMatch(ROUTES.PROFILE)

    return <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.container__nav}>
                <NavLink to={ROUTES.HOME} activeClassName={cn(styles["header__link-active"])} className={styles.header__link} >
                    <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
                    <span className={cn(styles["header__link-text"], "text text_type_main-default")}>Конструктор</span>
                </NavLink>
                <NavLink to={ROUTES.ORDERS} style={{ marginLeft: 10 }} activeClassName={cn(styles["header__link-active"])} className={styles.header__link}>
                    <ListIcon type={isOrders ? 'primary' : 'secondary'} />
                    <span className={cn(styles["header__link-text"], "text text_type_main-default")}>Лента Заказов</span>
                </NavLink>
            </div>
            <Link to={ROUTES.HOME} >
                <Logo />
            </Link>
            <div className={styles.container__nav}>
                <NavLink to={ROUTES.PROFILE} style={{ marginLeft: 100 }} activeClassName={cn(styles["header__link-active"])} className={styles.header__link}>
                    <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
                    <span className={cn(styles["header__link-text"], "text text_type_main-default")}>Личный Кабинет</span>
                </NavLink>
            </div>
        </div>
    </header>;
};

export default AppHeader;