import React from 'react';
import style from './AboutMe.module.css'
import me from '../../../Assets/Images/myPhoto.jpg'
const AboutMe = () => {
    return (
        <div className={style.aboutMe}>
            <div className={style.aboutMeContent}>
                <div>
                    <p className={style.aboutMeText}>Привет! Меня зовут Павел Шилин. Я Front-end разработчик</p>
                </div>
                <img src={me}  alt="" className={style.avatar}/>
            </div>
        </div>
    );
};

export default AboutMe;