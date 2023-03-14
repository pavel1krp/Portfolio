import React from 'react';
import {MyWorkItem} from "./MyWorkItem/MyWorkItem";
import styles from "./MyWork.module.scss"
import {Title} from "../../Common/Title";
import Social from '../../../Assets/Images/social.jpg'
import List from '../../../Assets/Images/list.png'
import Shelter from '../../../Assets/Images/Shelter.png'

const MyWork = () => {
    const social = {
        color: 'blue',
        backgroundImage: 'url(' + Social + ')',
    };
    const todoList = {
        color: 'blue',
        backgroundImage: 'url(' + List + ')',
    };
    const shelter = {
        color: 'blue',
        backgroundImage: 'url(' + Shelter + ')',
    };
    return (
        <section id={'projects'} className={styles.myWorkWrapper}>
            <div className={styles.myWork}>
                <div className={styles.myWorkTop}>
                    <Title title={'My works'}/>
                </div>
                <div className={styles.myWorkBottom}>
                    <div className={styles.rightWork}>
                        <MyWorkItem style={social} link={'https://pavel1krp.github.io/samurai-way/'} projectName={'Social Network'}
                                    projectDescription={'Social Network'}/>
                        <MyWorkItem style={social} link={'https://pavel1krp.github.io/samurai-way/'} projectName={'Social Network'}
                                    projectDescription={'Social Network'}/>
                    </div>
                    <div className={styles.leftWork}>
                        <MyWorkItem style={shelter} link={'https://rolling-scopes-school.github.io/pavel1krp-JSFE2022Q1/Shelter/'} projectName={'Shelter'}
                                    projectDescription={'Two-sided site for a pet shelter on native js with pagination and a slider'}/>
                        <MyWorkItem style={todoList} link={'https://pavel1krp.github.io/samurai-way/'} projectName={'TodoList'}
                                    projectDescription={'TodoList'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyWork;