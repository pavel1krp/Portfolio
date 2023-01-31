import React from 'react';
import styles from './Title.module.scss'

type PropsType ={
    title:string
}

export const Title = (props:PropsType) => {
    return (
        <div>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    );
};

