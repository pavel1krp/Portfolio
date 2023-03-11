import React from 'react';
import {MyWorkItem} from "./MyWorkItem/MyWorkItem";
import styles from "./MyWork.module.scss"
import {Title} from "../../Common/Title";
const MyWork = () => {
    return (
        <section id={'projects'} className={styles.myWorkWrapper}>
            <div className={styles.myWork}>
                <div className={styles.myWorkTop}>
                    <Title title={'My works'}/>
                </div>
                <div className={styles.myWorkBottom}>
                    <div className={styles.rightWork}>
                        <MyWorkItem link={'https://pavel1krp.github.io/samurai-way/'} projectName={'Social Network'} projectDescription={'Social Network'}/>
                        <MyWorkItem link={'https://pavel1krp.github.io/samurai-way/'} projectName={'Social Network'} projectDescription={'Social Network'}/>
                    </div>
                    <div className={styles.leftWork}>
                        <MyWorkItem link={'https://pavel1krp.github.io/samurai-way/'} projectName={'TodoList'} projectDescription={'TodoList'}/>
                        <MyWorkItem link={'https://pavel1krp.github.io/samurai-way/'} projectName={'TodoList'} projectDescription={'TodoList'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyWork;