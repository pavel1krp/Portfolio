import React from 'react';
import {SkillsCard} from "./SkillsCard/SkillsCard";
import styles from "./MySkills.module.scss"
import {Title} from "../../Common/Title";
import {skills} from "./SkillsCard/skills";
export const MySkills = ()=> {
    const mappedSkills = skills.map(el=>{
        return(
            <SkillsCard key={el.ID} skills={el} />
        )
    })
        return (
            <section className={styles.mySkillsContainer}>
                {/*<div className={styles.mySkills}>*/}
                {/*    <div className={styles.mySkillsTop}>*/}
                       <Title title={'My skills'}/>
                {/*    </div>*/}
                {/*    <div className={styles.mySkillsBottom}>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {mappedSkills}
            </section>
        );
}
