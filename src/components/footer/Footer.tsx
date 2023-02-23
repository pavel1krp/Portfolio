import React from 'react';
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className='container'>
                <div className={styles.footerContent}>
                    <p className={styles.text}>Copyright &#169; 2023</p>
                    <div className={styles.contactFooter}>

                    </div>
                </div>
            </div>
        </footer>
    )
};

