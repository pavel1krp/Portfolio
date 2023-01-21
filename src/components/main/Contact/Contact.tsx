import React from 'react';
import styles from './contact.module.css'

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contactFormDiv}>
                <h3>Контакты</h3>
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
