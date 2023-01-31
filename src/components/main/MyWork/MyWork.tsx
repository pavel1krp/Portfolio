import React from 'react';
import {MyWorkItem} from "./MyWorkItem/MyWorkItem";
import styles from "./MyWork.module.scss"
const MyWork = () => {
    return (
        <div className={styles.myWorkWrapper}>
            <div className={styles.myWork}>
                <div className={styles.myWorkTop}>
                    <h2>Мои работы</h2>
                </div>
                <div className={styles.myWorkBottom}>
                    <MyWorkItem projectName={'TodoList'} projectDescription={'TodoList'}/>
                    <MyWorkItem projectName={'Social Network'} projectDescription={'Social Network'}/>
                </div>
            </div>
        </div>
    );
};

export default MyWork;