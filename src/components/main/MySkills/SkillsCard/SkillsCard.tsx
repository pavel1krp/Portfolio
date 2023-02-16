import React from 'react';
import styles from './SkillsCard.module.scss'
import {SkillsType} from "./skills";
import {AiFillPhone} from "react-icons/all";

export type SkillsCardPropsType = {
    skills: SkillsType
}
export const SkillsCard = (props: SkillsCardPropsType) => {
    const {skills, ...RestProps} = props;
    const {Icons, title, color} = skills
    return (
            <div className={styles.cardContainer}>
                <div className={styles.skillsContainer}>
                    <Icons size={60} color={color}/>
                </div>
                <p className={styles.skillsName}>{title}</p>
            </div>
    );
};

