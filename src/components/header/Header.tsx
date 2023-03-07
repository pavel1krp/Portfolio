import React from 'react';
import style from './Header.module.scss'
import {Nav} from "./navigation/Nav";

export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <div className="container">
                <header className={style.header}>
                    <Nav/>
                </header>
            </div>
        </div>
    );
};
