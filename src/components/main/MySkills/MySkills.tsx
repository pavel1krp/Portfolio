import React from 'react';
import {SkillsCard} from "./SkillsCard/SkillsCard";
import styles from "./MySkills.module.scss"
import {Title} from "../../Common/Title";
import {skills} from "./SkillsCard/skills";

export const MySkills = () => {
    const mappedSkills = skills.map(el => {
        return (
            <SkillsCard key={el.ID} skills={el}/>
        )
    })
    return (
        <section id={'skills'}>
            <div className={'container'}>
                <Title title={'My skills'}/>
                <div className={styles.skills}>
                    {mappedSkills}
                </div>
            </div>
        </section>
    );
}
