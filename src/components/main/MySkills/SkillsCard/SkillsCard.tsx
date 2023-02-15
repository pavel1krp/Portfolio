import React from 'react';
import styles from './SkillsCard.module.scss'
import {SkillsType} from "./skills";
export type SkillsCardPropsType = {
    skills: SkillsType
}
export const SkillsCard = (props:SkillsCardPropsType ) => {
    const {skills, ...RestProps} = props;
    const {Icons, title, color} = skills
    return (
        <div className={styles.cardContainer}>
            <Icons size={50} color={color} />
        </div>
    );
};

