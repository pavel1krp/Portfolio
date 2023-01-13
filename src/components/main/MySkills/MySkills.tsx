import React, {Component} from 'react';
import {SkillsCard} from "./SkillsCard/SkillsCard";
import styles from "./MySkills.module.css"

export class MySkills extends Component {
    render() {
        return (
            <div className={styles.mySkillsContainer}>
                <div className={styles.mySkills}>
                    <div className={styles.mySkillsTop}>
                        <h2>Мои скиллы</h2>
                    </div>
                    <div className={styles.mySkillsBottom}>
                        <SkillsCard skillsDescription={'Js Description'} skillName={'JS'}/>
                        <SkillsCard skillsDescription={'Css Description'} skillName={'Css'}/>
                        <SkillsCard skillsDescription={'React Description'} skillName={'React'}/>
                    </div>
                </div>
            </div>
        );
    }
}
