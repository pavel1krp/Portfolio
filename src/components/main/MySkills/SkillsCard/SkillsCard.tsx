import React from 'react';
import styles from './SkillsCard.module.scss'
export type SkillsCardPropsType = {
    skillName: string
    skillsDescription: string
}
export const SkillsCard = (props:SkillsCardPropsType ) => {
    const {skillName, ...RestProps} = props;
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContainerTop}>
                <div className={styles.pow}></div>
                <h3>{skillName}</h3>
            </div>
            <div className={styles.cardContainerBottom}>
                <p>{props.skillsDescription}</p>
            </div>
        </div>
    );
};

