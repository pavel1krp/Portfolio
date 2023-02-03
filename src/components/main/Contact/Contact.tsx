import React from 'react';
import styles from './contact.module.scss'
import {Title} from "../../Common/Title";

export const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contactFormDiv}>
                <div className={styles.titleContainer}>
                    <Title title={'GET IN TOUCH'}/>
                </div>
            </div>
            <div>
                <form action="" className={styles.contactForm}>
                    <input placeholder={'Your name'} className={styles.contactInput} type="text"/>
                    <input placeholder={'Your email'} className={styles.contactInput} type="text"/>
                    <textarea placeholder={'Your message'} className={styles.contactTextArea} name="" id="">
                    </textarea>
                    <button>SEND MESSAGE</button>
                </form>

            </div>
        </div>
    );
};
