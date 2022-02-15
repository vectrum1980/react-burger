import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.css'


const AppHeader: React.FunctionComponent = () => {

    return <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.container}>
                <div className={styles.container__position}>
                    <nav>
                        <a className={styles["header__link-active"]} href="#" title="Home page"><BurgerIcon type='primary' /><span className={styles.header__text}>Конструктор</span></a>
                    </nav>
                </div>
                <nav>
                    <a className={styles.header__link} href="#" title="Home page"><ListIcon type='secondary' /><span className={styles.header__text}>Лента Заказов</span></a>
                </nav>
            </div>
            <div className={styles.container__logo}>
                <Logo />
            </div>
            <div className={styles.container}>
                <nav>
                    <a className={styles.header__link} href="#" title="Home page"><ProfileIcon type='secondary' /><span className={styles.header__text}>Личный Кабинет</span></a>
                </nav>
            </div>
        </div>

    </header>;
};

export default AppHeader;