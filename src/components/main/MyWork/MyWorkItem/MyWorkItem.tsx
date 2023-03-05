import React from 'react';
import styles from './MyWorkItem.module.scss'

type MyWorkItemPropsType = {
    projectName:string
    projectDescription:string
}

export const MyWorkItem = (props:MyWorkItemPropsType) => {
    const{projectName,projectDescription, ...restProps }= props
    return (
        <div className={styles.MyWorkItem}>
            <div className={styles.backgroundDiv}>
                <button className={styles.MyWorkSeeButton}>Смотреть</button>
            </div>
            <div className={styles.descriptionDiv}>
                <h3 className={styles.projectName}>{projectName}</h3>
                <p>{projectDescription}</p>
            </div>
        </div>
    );
};
