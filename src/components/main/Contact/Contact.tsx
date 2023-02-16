import React from 'react';
import styles from './contact.module.scss'
import {Title} from "../../Common/Title";
import {ContactItem} from "./ContactItem/ContactItem";
import {contacts} from "./ContactItem/Contact";

export const Contact = () => {
    const mappedContacts = contacts.map(el=>{
        return(
            <ContactItem title={el.title} description={el.description}/>
        )
    })
    return (
        <section className={styles.contactWrapper}>
            <div className="container">
                <div className={styles.contact}>
                    <div className={styles.contactFormDiv}>
                        <div className={styles.titleAndContact}>
                            <Title title={'GET IN TOUCH'}/>
                            {mappedContacts}
                        </div>
                    </div>
                    <div className={styles.formWrapper}>
                        <form action="" className={styles.contactForm}>
                            <input placeholder={'Your name'} className={styles.contactInput} type="text"/>
                            <input placeholder={'Your email'} className={styles.contactInput} type="text"/>
                            <textarea placeholder={'Your message'} className={styles.contactTextArea} name="" id="">
                    </textarea>
                            <button>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
