import React from 'react';
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <a className={style.navLink} href="#aboutMe">About me</a>
            <a className={style.navLink} href="#skills">Skills</a>
            <a className={style.navLink} href="#projects">Projects</a>
            <a className={style.navLink} href="#contacts">Contacts</a>
        </nav>
    );
};

