import React from 'react';
import {MyWorkItem} from "./MyWorkItem/MyWorkItem";
import styles from "./MyWork.module.scss"
import {Title} from "../../Common/Title";
const MyWork = () => {
    return (
        <section className={styles.myWorkWrapper}>
            <div className={styles.myWork}>
                <div className={styles.myWorkTop}>
                    <Title title={'My works'}/>
                </div>
                <div className={styles.myWorkBottom}>
                    <div className={styles.rightWork}>
                        <MyWorkItem projectName={'Social Network'} projectDescription={'Social Network'}/>
                        <MyWorkItem projectName={'Social Network'} projectDescription={'Social Network'}/>
                    </div>
                    <div className={styles.leftWork}>
                        <MyWorkItem projectName={'TodoList'} projectDescription={'TodoList'}/>
                        <MyWorkItem projectName={'TodoList'} projectDescription={'TodoList'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyWork;