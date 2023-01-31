import React from 'react';
import style from './Main.module.scss'
import AboutMe from "./AboutMe/AboutMe";
import {MySkills} from "./MySkills/MySkills";
import MyWork from "./MyWork/MyWork";
import {RemoteWork} from "./RemoteWork/RemoteWork";
import {Contact} from "./Contact/Contact";
export const Main = () => {
    return (
        <div className={style.main}>
            <AboutMe />
            <MySkills />
            <MyWork/>
            <RemoteWork/>
            <Contact/>
        </div>
    );
};
