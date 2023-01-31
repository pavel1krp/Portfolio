import React from 'react';
import style from './AboutMe.module.scss'
import me from '../../../Assets/Images/myPhoto.jpg'

const AboutMe = () => {
    return (
        <div className={style.aboutMe}>
            <div className={style.aboutMeContent}>
                <div className={style.aboutMeTextContainer}>
                    <h5 className={style.aboutMeText}>HELLO, MY NAME IS</h5>
                    <h1 className={style.myName}>Pavel Shilin</h1>
                    <h5 className={style.aboutMeText}>I am a front-end developer </h5>

                </div>
                <img src={me} alt="" className={style.avatar}/>
            </div>
        </div>
    );
};

export default AboutMe;