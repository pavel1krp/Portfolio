import React from 'react';
import styles from './RemoteWork.module.scss'
export const RemoteWork = () => {
    return (
        <div className={styles.remoteWrapper}>
            <div className={styles.remote}>
                <h3>Рассматриваю варинты удаленной работы</h3>
                <button className={styles.hireButton}>Нанять меня</button>
            </div>
        </div>
    );
};
