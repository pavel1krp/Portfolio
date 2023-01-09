import React from 'react';
import style from './Main.module.css'
import AboutMe from "./AboutMe/AboutMe";
import {MySkills} from "./MySkills/MySkills";
import MyWork from "./MyWork/MyWork";
export const Main = () => {
    return (
        <div className={style.main}>
            <AboutMe />
            <MySkills />
            <MyWork/>
        </div>
    );
};
