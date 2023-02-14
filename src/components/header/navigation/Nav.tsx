import React from 'react';
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <a className={style.navLink} href="">Главое</a>
            <a className={style.navLink} href="">Скилы</a>
            <a className={style.navLink} href="">Проекты</a>
            <a className={style.navLink} href="">Контакты</a>
        </nav>
    );
};

