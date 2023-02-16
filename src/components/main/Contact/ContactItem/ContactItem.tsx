import React from 'react';
import style from '../contact.module.scss'

type ContactItemPropsType ={
    title:string
    description:string
}

export const ContactItem = (props:ContactItemPropsType) => {
    return (
        <div className={style.contactItemContainer}>
            <div className={style.contactImage}>
                {/*<img src="" alt={props.title}/>*/}
            </div>
            <div className={style.contactText}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

