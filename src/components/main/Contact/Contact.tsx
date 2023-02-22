import React from 'react';
import styles from './contact.module.scss'
import {Title} from "../../Common/Title";
import {ContactItem} from "./ContactItem/ContactItem";
import {contacts} from "./ContactItem/Contact";

export const Contact = () => {
    const mappedContacts = contacts.map(el => {
        return (
            <ContactItem title={el.title} description={el.description} icon={el.icon}/>
        )
    })
    return (
        <section className={styles.contactWrapper}>
            <div className="container">
                <Title title={'GET IN TOUCH'}/>
                <div className={styles.contact}>
                    <div className={styles.contactFormDiv}>
                        <div className={styles.titleAndContact}>
                            {mappedContacts}
                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                        <form action="" className={styles.contactForm}>
                            <div className={styles.inputDiv}>
                                <input placeholder={'Your name'} className={styles.contactInput} type="text"/>
                                <input placeholder={'Your email'} className={styles.contactInput} type="text"/>
                            </div>
                            <textarea placeholder={'Your message'} className={styles.contactTextArea} name="" id="">
                    </textarea>
                            <input className={styles.submitButton} type="submit" value={'SEND MESSAGE'}/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
