import React from 'react';
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className='container'>
                <div className={styles.footerContent}>
                    <div>
                    </div>
                    <p className={styles.text}>Copyright &#169; 2023</p>
                    <div className={styles.contactFooter}>
                        <a className={styles.link} href="">GITHUB</a>
                        <a className={styles.link} href="">TELEGRAM</a>
                        <a className={styles.link} href="">LINKEDIN</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

