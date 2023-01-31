import React from 'react';
import styles from './contact.module.css'

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contactFormDiv}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Контакты</h2>
                </div>
                <form action="" className={styles.contactForm}>
                    <input className={styles.contactInput} type="text"/>
                    <input className={styles.contactInput} type="text"/>
                    <textarea className={styles.contactTextArea} name="" id="">
                    </textarea>
                    <button>Отправить</button>
                </form>
            </div>
        </div>
    );
};
