import React from 'react';
import styles from './RemoteWork.module.scss'
import {Title} from "../../Common/Title";

export const RemoteWork = () => {
    return (
        <section className={styles.remoteWrapper}>
            <div className={styles.remote}>
                <Title title={'Ready to work remotely and relocate.'}/>
                <p className={styles.aboutWork}> But I want to work in the office. I believe that working tightly in a
                    team will lead to better progress.</p>
                <button className={styles.hireButton}>Нанять меня</button>
            </div>
        </section>
    );
};
