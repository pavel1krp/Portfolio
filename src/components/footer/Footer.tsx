import React from 'react';
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className='container'>
                <div className={styles.footerContent}>
                    <p className={styles.text}>Copyright &#169; 2023</p>
                    <div className={styles.contactFooter}>
                        <a className={styles.link} href="https://github.com/pavel1krp">GITHUB</a>
                        <a className={styles.link} href="https://t.me/PavelShylin">TELEGRAM</a>
                        <a className={styles.link} href="https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D1%88%D0%B8%D0%BB%D0%B8%D0%BD-883ba1262/">LINKEDIN</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

