import React from 'react';
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className='container'>
                <div className={styles.footerContent}>
                    {/*<h3 className={styles.text}>Павел Шилин</h3>*/}
                    <div className={styles.socialContainer}>
                        <div className={styles.social}></div>
                        <div className={styles.social}></div>
                        <div className={styles.social}></div>
                        <div className={styles.social}></div>
                    </div>
                    <p className={styles.text}>Copyright &#169; 2023</p>
                </div>
            </div>
        </footer>
    )
};

