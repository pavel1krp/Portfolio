import React from 'react';
import style from '../contact.module.scss'

type ContactItemPropsType = {
    title: string
    description: string
    icon: any
}

export const ContactItem = (props: ContactItemPropsType) => {
    return (
        <div className={style.contactItemContainer}>
            <div className={style.contactImage}>
                <props.icon size={30}/>
            </div>
            <div className={style.contactText}>
                <h4 className={style.contactName}>{props.title}</h4>
                <p className={style.contactDescription}>{props.description}</p>
            </div>
        </div>
    );
};

