import React from 'react';
import style from './Main.module.css'
import AboutMe from "./AboutMe/AboutMe";
const Main = () => {
    return (
        <div className={style.main}>
            <AboutMe />
        </div>
    );
};

export default Main;