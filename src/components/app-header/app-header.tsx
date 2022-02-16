import React from "react";
import { NavLink, Link, useMatch } from 'react-router-dom'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'
import { ROUTES } from "../../App";
import cn from 'classnames'


const AppHeader: React.FunctionComponent = () => {

    const isConstructor = !!useMatch(ROUTES.HOME)
    const isOrders = !!useMatch(ROUTES.ORDERS)
    const isProfile = !!useMatch(ROUTES.PROFILE)

    return <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.container__nav}>
                <NavLink to={ROUTES.HOME} className={(navData) => navData.isActive ? styles["header__link-active"] : styles.header__link} >
                    <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
                    <span className={cn(styles["header__link-text"], "text text_type_main-default")}>Конструктор</span>
                </NavLink>
                <NavLink to={ROUTES.ORDERS} style={{ marginLeft: 10 }} className={(navData) => navData.isActive ? styles["header__link-active"] : styles.header__link}>
                    <ListIcon  type={isOrders ? 'primary' : 'secondary'} />
                    <span className={cn(styles["header__link-text"], "text text_type_main-default")}>Лента Заказов</span>
                </NavLink>             
            </div>
            <Link to={ROUTES.HOME} className={styles.container__logo}>
                <Logo />
            </Link>
            <div className={styles.container__nav}>
                <NavLink to={ROUTES.PROFILE} style={{marginLeft: 100}} className={(navData) => navData.isActive ? styles["header__link-active"] : styles.header__link}>
                    <ProfileIcon  type={isProfile ? 'primary' : 'secondary'} />
                    <span className={cn(styles["header__link-text"], "text text_type_main-default")}>Личный Кабинет</span>
                </NavLink>
            </div>
        </div>
    </header>;
};

export default AppHeader;